const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/fileUpload");
const { fileUpload, getFile } = require("../controllers/uploadController");

router.post("/file", upload.single("file"), fileUpload);
router.get("/file", getFile);

module.exports = router;
