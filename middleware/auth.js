const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const verifyUser = (userRole) => {
  return (req, res, next) => {
    console.log(req.headers);
    const { access_token } = req.headers;
    if (access_token) {
      try {
        const { id, role } = jwt.verify(access_token, SECRET);
        if (role === userRole) {
          req.body.id = id;
          return next();
        } else {
          const error = new Error(`Not an ${userRole}`);
          error.status = 403;
          next(error);
        }
      } catch (error) {
        error = new Error("access_token illegal");
        error.status = 403;
        next(error);
      }
    } else {
      const error = new Error("access_token should be included in the headers");
      error.status = 401;
      next(error);
    }
  };
};

module.exports = { verifyUser };
