const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

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
