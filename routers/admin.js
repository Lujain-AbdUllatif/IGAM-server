const express = require("express");
const { adminSignUp, addPackges, addDonation } = require("../handlers/admin");
const { checkUserIfExists } = require("../middleware/users");
const { checkSignUpParams } = require("../middleware/admin");
const router = express.Router();

router.post("/sign-up", checkSignUpParams, checkUserIfExists, adminSignUp);
router.post("/add-packages", addPackges);
router.post("/add-donation", addDonation);
module.exports = router;
