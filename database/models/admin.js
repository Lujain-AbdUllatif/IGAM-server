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
    });
};

const checkAdminIfExists = (email) => {
  return db
    .query("select * from admins where email = $1", [email])
    .then((response) => {
      return response.rowCount !== 0;
    });
};

module.exports = { addAdmin, checkAdminIfExists };
