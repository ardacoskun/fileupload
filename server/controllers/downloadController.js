const File = require("../models/File");

//Downlaod File
const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.download(file.filePath);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { downloadFile };
