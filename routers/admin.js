const express = require("express");
const {
  adminSignUp,
  addPackges,
  addDonation,
  getAgents,
  addAgent,
} = require("../handlers/admin");
const { checkUserIfExists } = require("../middleware/users");
const { checkSignUpParams } = require("../middleware/admin");
const { verifyUser } = require("../middleware/auth");
const router = express.Router();

router.post("/sign-up", checkSignUpParams, checkUserIfExists, adminSignUp);
router.post("/add-packages", verifyUser("admin"), addPackges);
router.post("/add-donation", verifyUser("admin"), addDonation);
// getting al the agents
router.get("/agents", verifyUser("admin"), getAgents);
// adding an agent
router.post("/agent", verifyUser("admin"), addAgent);

module.exports = router;
