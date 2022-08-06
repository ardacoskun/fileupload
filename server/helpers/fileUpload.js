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
    if (
      !file.originalname.match(
        /\.(doc|docx|txt|png|jpg|jpeg|pdf|mp4|mov|DOC|DOCX|TXT|PNG|JPG|JPEG|PDF|MP4|MOV)$/
      )
    ) {
      return cb(new Error("Please upload a perimitted file type"));
    }

    cb(undefined, true);
  },
});

module.exports = { upload };
