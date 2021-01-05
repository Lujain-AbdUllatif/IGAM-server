const express = require("express");
const { verifyUser } = require("../middleware/auth");
const { addHelps, getAllAdminPackages } = require("../handlers/help");
const router = express.Router();

router.post("/packages/add", verifyUser("admin"), addHelps);
router.get("/packages", verifyUser("admin"), getAllAdminPackages);
router.post("/financial-aid/add", verifyUser("admin"), addHelps);
router.get("/financial-aid", verifyUser("admin"), getAllAdminPackages);

module.exports = router;
