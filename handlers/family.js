const model = require("../database/models/family");

const createFamily = (req, res, next) => {
  model
    .addFamily(req.body)
    .then((family) => {
      res.status(201).send(family);
    })
    .catch(next);
};

const getAllFamily = (req, res, next) => {
  console.log(req.body);
  model
    .getAllFamily(req.body)
    .then((families) => {
      res.status(200).send(families);
    })
    .catch(next);
};
module.exports = { createFamily, getAllFamily };
