const express = require("express");
const { createVillage, getAllVillage } = require("../handlers/village");
const router = express.Router();
router.post("/", verifyUser("admin"), createVillage);
router.get("/", verifyUser("admin"), getAllVillage);
module.exports = router;
