import axios from "axios";

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
