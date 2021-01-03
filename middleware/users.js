// 409 conflict : the response is sent when a request conflicts with the current state of the server
const { checkAdminIfExists } = require("../database/models/admin");
const { checkAgentIfExists } = require("../database/models/agent");
const checkUserIfExists = (req, res, next) => {
  const { email } = req.body;
  checkAdminIfExists(email)
    .then((exists) => {
      if (exists) {
        throw new Error();
      }
      checkAgentIfExists(email).then((exists) => {
        if (exists) {
          throw new Error();
        }
        next();
      });
    })
    .catch((err) => {
      const error = new Error(`Account already exists with email: ${email}`);
      error.status = 409;
      next(error);
    });
};

module.exports = { checkUserIfExists };
