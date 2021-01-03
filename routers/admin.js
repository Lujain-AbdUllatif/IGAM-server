const express = require("express");
const { adminSignUp } = require("../handlers/admin");
const { checkUserIfExists } = require("../middleware/users");
const { checkSignUpParams } = require("../middleware/admin");
const router = express.Router();

router.post("/sign-up", checkSignUpParams, checkUserIfExists, adminSignUp);

module.exports = router;
