const express = require("express");
const router = express.Router();
const { downloadFile } = require("../controllers/downloadController");

router.get("/:id", downloadFile);

module.exports = router;
