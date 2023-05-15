const express = require("express");

const validateController = require("../controllers/validate");

const router = express();

router.post("/", validateController.validateLink);

module.exports = router;
