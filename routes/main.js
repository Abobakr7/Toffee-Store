const express = require("express");
const router = express.Router();

router.get("/");
router.get("/main-feed");
router.get("/about");
router.get("/faq")

module.exports = router;