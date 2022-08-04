const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("file", fileSchema);
