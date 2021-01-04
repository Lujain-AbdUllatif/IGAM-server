const express = require("express");
const { getAllFamily } = require("../database/models/family");
const { createFamily } = require("../handlers/family");
const { addFamilyCode } = require("../middleware/family");
const router = express.Router();

router.post("/family", addFamilyCode, createFamily);
router.get("/family", getAllFamily);
module.exports = router;
