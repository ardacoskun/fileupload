const express = require("express");
const app = express();
const mongoose = require("mongoose");
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

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed.Server not started.");
  });
