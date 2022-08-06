const express = require("express");
const router = express.Router();
const { downloadFile } = require("../controllers/downloadController");

router.get("/", downloadFile);

module.exports = router;
