const model = require("../database/models/family");

const createFamily = (req, res, next) => {
  model
    .addFamily(newFamily)
    .then((family) => {
      res.status(201).send(family);
    })
    .catch(next);
};

const getAllFamily = (req, res, next) => {
  model
    .getAllFamily(req.body.village_id)
    .then((families) => {
      res.status(200).send(families);
    })
    .catch(next);
};
module.exports = { createFamily, getAllFamily };
