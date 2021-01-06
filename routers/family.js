const express = require("express");
const {
  createFamily,
  getAllFamily,
  updateFamily,
} = require("../handlers/family");
const { addFamilyCode } = require("../middleware/family");
const {
  getAllFamilyPackages,
  getAllFamilyFinancialAid,
} = require("../handlers/help");
const { verifyUser } = require("../middleware/auth");
const router = express.Router();

// Admin: add family
router.post("/", verifyUser("admin"), addFamilyCode, createFamily);
// Admin: get all families
router.get("/", verifyUser("admin"), getAllFamily);
// Admin: get all family's packages
router.post("/package", verifyUser("admin"), getAllFamilyPackages);
// Admin: get all family's financial-aid
router.post("/financial-aid", verifyUser("admin"), getAllFamilyFinancialAid);

router.put("/", verifyUser("admin"), updateFamily);
module.exports = router;
