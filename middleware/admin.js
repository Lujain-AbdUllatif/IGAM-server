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
  const error = new Error("Passed request body parameters error!");
  error.status = 409;
  next(error);
};

module.exports = { checkSignUpParams };
