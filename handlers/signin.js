const userSignIn = (err, req, res, next) => {
  console.log("userSignIn method ...");
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
  res.status(200).send({ id, role });
};

module.exports = { userSignIn };
