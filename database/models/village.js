const { response } = require("express");
const express = require("express");
const db = require("../connection");
const addVillage = ({ name, location, admin_id }) => {
  return db
    .query(
      "insert into villages (name,location,admin_id,) values ($1,$2,$3)returning(name),(location),(admin_id)",
      [name, location, admin_id]
    )
    .then((response) => {
      return response.rows[0];
    })
    .catch(console.log);
};
const getAllVillage = (admin_id) => {
  return db
    .query("select * from villages where village_id =$1", [admin_id])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};
module.exports = { addVillage, getAllVillage };
