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

<<<<<<< HEAD
const addAgent = (req, res, next) => {};

module.exports = { adminSignUp, addPackges, addDonation, getAgents, addAgent };
=======
// const addAgent = (req, res, next);

module.exports = { adminSignUp, addPackges, addDonation, getAgents };
>>>>>>> 88b851d728cf150af71029c26f4fa2235cb8e69b
