const express = require("express");
const { createVillage, getAllVillage } = require("../handlers/village");
const { verifyUser } = require("../middleware/auth");
const router = express.Router();
router.post("/", verifyUser("admin"), createVillage);
router.get("/", verifyUser("admin"), getAllVillage);
module.exports = router;
