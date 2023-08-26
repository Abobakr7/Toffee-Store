const express = require("express");
const router = express.Router();

router.get("/profile");

router.get("/profile/edit");
router.post("/profile");

module.exports = router;