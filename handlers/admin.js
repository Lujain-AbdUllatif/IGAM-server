const model = require("../database/models/admin");

const adminSignUp = (req, res, next) => {
  model
    .addAdmin(req.body)
    .then((response) => {
      const { password, ...restDetails } = response;
      res.status(201).send(restDetails);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

const addPackges = (req, res, next) => {
  model
    .addPackges(req.body)
    .then((avialablePackgesObj) => {
      res.status(200).send(avialablePackgesObj);
    })
    .catch(next);
};
const addDonation = (req, res, next) => {
  model
    .addDonation(req.body)
    .then((donationBudgetObj) => {
      res.status(200).send(donationBudgetObj);
    })
    .catch(next);
};

const getAgents = (req, res, next) => {
  model
    .getAgents(req.body)
    .then((allAgents) => {
      res.status(200).send(allAgents);
    })
    .catch(next);
};

const addAgent = (req, res, next) => {
  model
    .addAgent(req.body)
    .then((agent) => {
      console.log(agent);
      res.status(201).send(agent);
    })
    .catch(next);
};

//Admin: edit-agent
const updateAgent = (req, res, next) => {
  model
    .updateAgent(req.body)
    .then((updated) => {
      res.status(200).send(updated);
    })
    .catch(next);
};
module.exports = {
  adminSignUp,
  addPackges,
  addDonation,
  getAgents,
  addAgent,
  updateAgent,
};
