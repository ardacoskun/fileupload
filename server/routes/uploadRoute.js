const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/fileUpload");
const {
  fileUpload,
  getFile,
  deleteFile,
} = require("../controllers/uploadController");

router.post("/file", upload.single("file"), fileUpload);
router.get("/file", getFile);
router.delete("/file/:id", deleteFile);

module.exports = router;
