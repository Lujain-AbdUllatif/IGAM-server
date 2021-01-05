const express = require("express");
const {
  createFamily,
  getAllFamily,
  updateFamily,
} = require("../handlers/family");
const { addFamilyCode } = require("../middleware/family");

const { verifyUser } = require("../middleware/auth");
const router = express.Router();

router.post("/", verifyUser("admin"), addFamilyCode, createFamily);
router.get("/", verifyUser("admin"), getAllFamily);
router.put("/", verifyUser("admin"), updateFamily);
module.exports = router;
