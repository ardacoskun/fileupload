//Downlaod File
const downloadFile = async (req, res) => {
  try {
    await res.downlaod(`../uploads/${req.params.fileName}`);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { downloadFile };
