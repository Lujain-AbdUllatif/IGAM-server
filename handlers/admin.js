const model = require("../database/models/admin");

const adminSignIn = (req, res, next) => {};

const adminSignUp = (req, res, next) => {
  model
    .addAdmin(req.body)
    .then((response) => {
        res.status(201).send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { adminSignIn, adminSignUp };
