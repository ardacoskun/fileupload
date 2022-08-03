const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, filte, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const upload = multer({ storage: storage });
