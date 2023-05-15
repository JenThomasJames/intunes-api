const express = require("express");

const downloadController = require("../controllers/download");

const router = express.Router();

router.post("/", downloadController.downloadMedia);

module.exports = router;
