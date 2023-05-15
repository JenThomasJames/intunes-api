const express = require("express");

const validateController = require("../controllers/validate");

const router = express();

router.get("/meta/:videoID", validateController.getMetaInfo);
router.get("/:videoID", validateController.validateLink);

module.exports = router;
