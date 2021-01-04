const { parametersError } = require("./utils/functions");
const { checkAdminIfExists } = require("../database/models/admin");
const { checkAgentIfExists } = require("../database/models/agent");
const checkUserIfExists = (req, res, next) => {
  const { email } = req.body;
  checkAdminIfExists(email)
    .then((users) => {
      if (users.length !== 0) {
        const user = users[0];
        req.user = {
          savedPassword: user.password,
          role: "admin",
          id: user.id,
        };
        throw new Error();
      }
      checkAgentIfExists(email).then((users) => {
        if (users.length !== 0) {
          const user = users[0];
          req.user = {
            savedPassword: user.password,
            role: "agent",
            id: user.id,
          };
          throw new Error();
        }
        return next();
      });
    })
    .catch((err) => {
      const error = new Error(`Account already exists with email: ${email}`);
      error.status = 409;
      next(error, req, res);
    });
};

const checkSignInParams = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    return next();
  }
  next(parametersError());
};

module.exports = { checkUserIfExists, checkSignInParams };
