const File = require("../models/File");

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

//Get File for Type
const getFileType = async (req, res) => {
  try {
    const files = await File.find();

    if (files) {
      const type = req.params.type;
      let filteredArr = [];
      if (`${type}s`.toLowerCase() === "texts") {
        filteredFiles = files.filter(
          (file) =>
            file.fileType.includes(type) ||
            file.fileType.includes("application")
        );
        filteredArr.push(...filteredFiles);
      } else {
        filteredFiles = files.filter((file) => file.fileType.includes(type));
        filteredArr.push(...filteredFiles);
      }
      return res.status(200).send(filteredArr);
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

module.exports = { getFile, deleteFile, getFileType };
