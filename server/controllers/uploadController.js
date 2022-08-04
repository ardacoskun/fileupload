const File = require("../models/File");

//Create New File
const fileUpload = async (req, res) => {
  try {
    const newFile = new File({
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: sizeConvert(req.file.size, 3),
      filePath: req.file.path,
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

const sizeConvert = (bytes, decimal) => {
  if (bytes === "") {
    return "0 Bytes";
  }
  const sizeTypes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];

  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(decimal)) +
    " " +
    sizeTypes[index]
  );
};

module.exports = { fileUpload, getFile };
