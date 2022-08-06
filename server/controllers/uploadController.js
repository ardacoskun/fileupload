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
    res.status(200).send("Upload Successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//Get File
const getFile = async (req, res) => {
  try {
    const files = await File.find();
    if (files) {
      return res.status(200).send(files);
    }
    return res.status(400).send("Files not found");
  } catch (error) {
    return res.status(500).send("Something went wrong!!");
  }
};

//Delete File
const deleteFile = async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) {
      return res.status(400).send("File is not found");
    }
    return res.status(204).send(file);
  } catch (error) {
    return res.status(500).send("Something went wrong!!");
  }
};

module.exports = { fileUpload, getFile, deleteFile };
