const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/fileUpload");
const {
  getFile,
  deleteFile,
  getFileType,
} = require("../controllers/uploadController");
const displayDate = require("../helpers/getDate");
const sizeConvert = require("../helpers/sizeConvert");
const File = require("../models/File");

//POST-Upload file Route
router.post(
  "/file",
  upload.single("file"),
  async (req, res) => {
    const newFile = new File({
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: sizeConvert(req.file.size, 3),
      filePath: req.file.path,
      uploadDate: displayDate,
    });
    await newFile.save();
    res.status(200).send("Upload Successfully");
  },
  (error, req, res, next) => {
    res.status(400).send(error.message);
  }
);
//GET-Get All Files Route
router.get("/file", getFile);

//GET-Get Single Type Route
router.get("/file/:type", getFileType);

//GET-Delete File Route
router.delete("/file/:id", deleteFile);

module.exports = router;
