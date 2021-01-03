const { parametersError } = require("./utils/functions");

const checkSignUpParams = (req, res, next) => {
  const {
    name,
    email,
    password,
    phone,
    donation_budget,
    available_packages,
  } = req.body;
  if (
    name &&
    email &&
    password &&
    phone &&
    donation_budget &&
    available_packages
  ) {
    next();
  }

  next(parametersError());
};

module.exports = { checkSignUpParams };
