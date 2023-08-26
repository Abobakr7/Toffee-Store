const express = require("express");
const router = express.Router();

router.get("/signup");
router.post("/signup");

router.get("/login");
router.post("/login");

router.post("/logout")

module.exports = router;