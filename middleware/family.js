const generator = require("generate-password");
const addFamilyCode = (req, res, next) => {
  const code = generator.generate({
    length: 10,
    numbers: true,
  });
  req.body.code = code;
  return next();
};
module.exports = { addFamilyCode };
