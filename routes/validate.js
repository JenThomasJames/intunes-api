const express = require("express");

const validateController = require("../controllers/validate");

const router = express();

router.get("/:videoID", validateController.validateLink);

module.exports = router;
