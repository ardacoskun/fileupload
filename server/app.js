const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoute");
const downloadRoutes = require("./routes/downloadRoute");

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", uploadRoutes);
app.use("/api/download", downloadRoutes);

app.use((req, res) => {
  res.status(404).json({
    errors: "Page Not Found",
  });
});

module.exports = app;
