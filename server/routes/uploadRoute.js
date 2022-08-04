const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/fileUpload");
const { fileUpload } = require("../controllers/uploadController");

router.post("/file", upload.single("file"), fileUpload);

module.exports = router;
