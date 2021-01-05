const db = require("../connection");

const addHelps = ({ type, amount, families_id, agent_id, id }) => {
  // status help_status should be included as assigned
  const packageQueris = families_id.map((family_id) => {
    return db.query(
      "insert into help (type,amount,status,family_id,agent_id,admin_id)  values ($1,$2,$3,$4,$5,$6) returning (id)",
      [type, amount, "assigned", family_id, agent_id, id]
    );
  });

  return Promise.all(packageQueris)
    .then((values) => {
      return values.map((value) => value.rows[0]);
    })
    .catch(console.log);
};

const getAllAdminFinancialAid = ({ id }) => {
  return getAdminAid("money", id);
};

const getAllAdminPackages = ({ id }) => {
  return getAdminAid("package", id);
};

const getAdminAid = (aidType, id) => {
  return db
    .query(
      "select help.id as package_id, help.status as package_status,agents.name as agent_name, families.name as family_name  from help join admins on admins.id = help.admin_id join agents on help.agent_id= agents.id join families on families.id= help.family_id where help.admin_id= $1 and help.type =$2",
      [id, aidType]
    )
    .then((response) => response.rows)
    .catch(console.log);
};

// package_id, agent_id, agent_name, amount, status
const getAllFamilyPackages = ({ family_id }) => {
  return db
    .query(
      "select help.id, help.type, help.amount, help.status, help.agent_id, agents.name from help left join agents on help.agent_id = agents.id where help.family_id = $1 and help.type = 'package'",
      [family_id]
    )
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};

const getAllFamilyFinancialAid = ({ family_id }) => {
  return db
    .query(
      "select help.id, help.type, help.amount, help.status, help.agent_id, agents.name from help left join agents on help.agent_id = agents.id where help.family_id = $1 and help.type = 'money'",
      [family_id]
    )
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};

module.exports = {
  addHelps,
  getAllAdminPackages,
  getAllAdminFinancialAid,
  getAllFamilyPackages,
  getAllFamilyFinancialAid,
};
