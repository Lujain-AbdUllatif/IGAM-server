const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const userSignIn = (err, req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    next(err);
  }
  const { password } = req.body;
  const { savedPassword, role, id } = req.user;
  if (password !== savedPassword) {
    const error = new Error("Wrong password, try again!");
    error.status = 403;
    next(error);
  }
  const access_token = jwt.sign({ id, role }, SECRET);
  res.status(200).send({ access_token });
};

module.exports = { userSignIn };
