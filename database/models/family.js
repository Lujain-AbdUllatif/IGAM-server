const { response } = require("express");
const express = require("express");
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

const getAllFamily = (village_id) => {
  return db
    .query("select * from families where village_id =$1", [village_id])
    .then((response) => {
      return response.rows;
    })
    .catch(console.log);
};
module.exports = { addFamily, getAllFamily };
