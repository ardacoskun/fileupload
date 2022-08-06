import axios from "axios";
import FileDownload from "js-file-download";

export const upload = async (data) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/file`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getFile = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/file`);
    return data;
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const deleteFile = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/file/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const downloadFile = (id, fileName) => {
  axios({
    url: `${process.env.REACT_APP_BASE_URL}/download/${id}`,
    method: "GET",
    responseType: "blob",
  }).then((res) => {
    FileDownload(res.data, fileName);
  });
};
