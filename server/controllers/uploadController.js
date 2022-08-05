const File = require("../models/File");
const displayDate = require("../helpers/getDate");
const sizeConvert = require("../helpers/sizeConvert");

//Create New File
const fileUpload = async (req, res) => {
  try {
    const newFile = new File({
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: sizeConvert(req.file.size, 3),
      filePath: req.file.path,
      uploadDate: displayDate,
    });
    await newFile.save();
    res.status(201).send("Upload Successfully");
  } catch (error) {
    res.status.send(error);
  }
};

//Get File
const getFile = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Delete File
const deleteFile = async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) {
      return res.status(401).send();
    }
    res.stauts(204).send(file);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { fileUpload, getFile, deleteFile };
