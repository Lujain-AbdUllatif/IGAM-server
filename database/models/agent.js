const db = require("../connection");
const checkAgentIfExists = (email) => {
  return db
    .query("select * from agents where email = $1", [email])
    .then((response) => {
      return response.rows;
    });
};

module.exports = { checkAgentIfExists };
