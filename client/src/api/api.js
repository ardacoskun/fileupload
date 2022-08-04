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
