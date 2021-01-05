const { response } = require("express");
const express = require("express");
const db = require("../connection");
const addVillage = ({ name, location, id }) => {
  return db
    .query(
      "insert into villages (name,location,admin_id) values ($1,$2,$3)returning (name),(location)",
      [name, location, id]
    )
    .then((response) => {
      console.log("adding rows", response.rows[0]);
      return response.rows[0];
    })
    .catch(console.log);
};
const getAllVillage = ({ id }) => {
  return db
    .query("select * from villages where admin_id =$1", [id])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};
module.exports = { addVillage, getAllVillage };
