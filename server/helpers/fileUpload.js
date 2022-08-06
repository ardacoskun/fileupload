const multer = require("multer");
const fs = require("fs");

const upload = multer({
  dest: (req, file, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx|png|jpg|jpeg|pdf|mp4|mov)$/)) {
      return cb(new Error("Please upload a perimitted file type"));
    }

    cb(undefined, true);
  },
});

module.exports = { upload };
