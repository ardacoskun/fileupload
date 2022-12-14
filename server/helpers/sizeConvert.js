const sizeConvert = (bytes, decimal) => {
  if (bytes === "") {
    return "0 Bytes";
  }
  const sizeTypes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];

  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(decimal)) +
    " " +
    sizeTypes[index]
  );
};

module.exports = sizeConvert;
