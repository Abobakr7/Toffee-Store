const express = require("express");
const router = express.Router();


router.get("/categories");
router.get("/categories/:category");
router.get("/categories/:category/:product");
router.get("/:product");

module.exports = router;