const model = require("../database/models/admin");

const adminSignIn = (req, res, next) => {};

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

module.exports = { adminSignIn, adminSignUp };
