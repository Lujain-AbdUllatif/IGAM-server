const { response } = require("express");
const model = require("../database/models/help");

const addHelps = (req, res, next) => {
  model
    .addHelps(req.body)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch(next);
};

const getAllAdminPackages = (req, res, next) => {
  model
    .getAllAdminPackages(req.body)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(next);
};
const getAllAdminFinancialAids = (req, res, next) => {
  model
    .getAllAdminFinancialAid(req.body)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(next);
};

module.exports = { addHelps, getAllAdminPackages, getAllAdminFinancialAids };
