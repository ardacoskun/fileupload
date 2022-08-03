const fileUpload = async (req, res, next) => {
  try {
    const file = req.file;
    res.status(201).send("Upload Successfully");
  } catch (error) {
    res.status.send(error.message);
  }
};

module.exports = { fileUpload };
