const { response } = require("express");
const db = require("../connection");

const addAdmin = ({
  name,
  email,
  password,
  phone,
  donation_budget,
  available_packages,
}) => {
  return db
    .query(
      "insert into admins (name, email,password,phone,donation_budget,available_packages) values ($1,$2,$3,$4,$5,$6) returning (name),(email),(password),(phone),(donation_budget),(available_packages)",
      [name, email, password, phone, donation_budget, available_packages]
    )
    .then((response) => {
      console.log(response);
      return response.rows[0];
    })
    .catch(console.log);
};

const checkAdminIfExists = (email) => {
  return db
    .query("select * from admins where email = $1", [email])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};

const addPackges = ({ id, packages }) => {
  return db
    .query("select available_packages from admins where id = $1", [id])
    .then((response) => {
      let { available_packages } = response.rows[0];
      available_packages += packages;
      return db
        .query(
          "update admins set available_packages = $1 where id = $2 returning (available_packages)",
          [available_packages, id]
        )
        .then((response) => {
          return response.rows[0];
        })
        .catch(console.log);
    });
};

const addDonation = ({ id, donation }) => {
  return db
    .query("select donation_budget from admins where id = $1", [id])
    .then((response) => {
      let { donation_budget } = response.rows[0];
      donation_budget += donation;
      return db
        .query(
          "update admins set donation_budget = $1 where id = $2 returning (donation_budget)",
          [donation_budget, id]
        )
        .then((response) => {
          return response.rows[0];
        })
        .catch(console.log);
    });
};

const getAgents = ({ id }) => {
  return db
    .query("select * from agents where admin_id = $1", [id])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};

const addAgent = ({ name, email, phone, password, location, id }) => {
  return db
    .query(
      "insert into agents(name, email, phone, password, location, admin_id) values ($1,$2,$3,$4,$5,$6) returning (name), (email), (phone), (password), (location), (admin_id)",
      [name, email, phone, password, location, id]
    )
    .then((response) => {
      return response.rows[0];
    })
    .catch(console.log());
};

module.exports = {
  addAdmin,
  checkAdminIfExists,
  addPackges,
  addDonation,
  getAgents,
  addAgent,
};
