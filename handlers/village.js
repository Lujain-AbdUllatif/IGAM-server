const model = require("../database/models/village");
const createVillage = (req, res, next) => {
  model
    .addVillage(req.body)
    .then((village) => {
      res.status(201).send(village);
    })
    .catch(next);
};
const getAllVillage = (req, res, next) => {
  model
    .getAllVillage(req.body)
    .then((villages) => {
      res.status(200).send(villages);
    })
    .catch(next);
};
module.exports = { createVillage, getAllVillage };
