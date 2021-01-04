const express = require("express");
const {
  adminSignUp,
  addPackges,
  addDonation,
  getAgents,
} = require("../handlers/admin");
const { checkUserIfExists } = require("../middleware/users");
const { checkSignUpParams } = require("../middleware/admin");
const router = express.Router();

router.post("/sign-up", checkSignUpParams, checkUserIfExists, adminSignUp);
router.post("/add-packages", addPackges);
router.post("/add-donation", addDonation);
// getting al the agents
router.get("/agents", getAgents);
// adding an agent
router.post("/agent");

module.exports = router;
