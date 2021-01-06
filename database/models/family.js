const db = require("../connection");
const addFamily = ({ name, code, phone, members, village_id }) => {
  return db
    .query(
      "insert into families (name,code,phone,members,village_id) values ($1,$2,$3,$4,$5)returning(name),(code),(phone),(members),(village_id)",
      [name, code, phone, members, village_id]
    )
    .then((response) => {
      return response.rows[0];
    })
    .catch(console.log);
};

const updateFamily = ({ name, phone, members, code, family_id }) => {
  return db
    .query(
      `update  families  set name =$1, phone=$2, members=$3 ,code=$4 where id =$5 returning (name),(phone),(members),(code),(id) `,
      [name, phone, members, code, family_id]
    )
    .then((response) => response.rows[0]);
};
const getAllFamily = ({ village_id }) => {
  return db
    .query("select * from families where village_id = $1", [village_id])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};
module.exports = { addFamily, getAllFamily, updateFamily };
