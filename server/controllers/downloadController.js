const File = require("../models/File");

//Downlaod File
const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(400).send("Download failed");
    }
    res.download(file.filePath);
  } catch (error) {
    res.status(500).send("Something went wrong!!");
  }
};

module.exports = { downloadFile };
