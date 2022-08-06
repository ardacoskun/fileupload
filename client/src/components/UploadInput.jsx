import React, { useState } from "react";
import styled from "styled-components";
import cloudImage from "../assets/cloud.png";
import { upload } from "../api/api";
import { useUpload } from "../contexts/appContext";
import { Error } from "../components";

const UploadInput = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const { prevFile, passFiles } = useUpload();

  const handleInputChange = (e) => {
    if (e.target.files[0]) {
      passFiles(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", prevFile);
    const { data } = await upload(formData);
    if (data) {
      setAlert({ type: "success", message: data });
    } else {
      setAlert({ type: "error", message: "Upload Failed !" });
    }
    setTimeout(() => {
      setAlert({
        type: "",
        message: "",
      });
    }, 2500);
    passFiles("");
    setLoading(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <UploadInputWrapper>
        <UploadInputContainer>
          <UploadInputImage src={cloudImage} alt="upload" />
          <h2>Choose a file or drag it here</h2>
        </UploadInputContainer>
        <input type="file" value="" onChange={handleInputChange} />
      </UploadInputWrapper>
      <UploadInputBtnContainer>
        <UploadInputBtn disabled={!prevFile && true} onClick={handleUpload}>
          {loading ? "Loading..." : "Upload"}
        </UploadInputBtn>
      </UploadInputBtnContainer>

      {alert && <Error message={alert.message} type={alert.type} />}
    </div>
  );
};

const UploadInputWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;

  &:hover {
    opacity: 0.6;
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const UploadInputContainer = styled.div`
  text-align: center;
  font-weight: 600;
  padding: 10px;
`;

const UploadInputImage = styled.img`
  width: 150px;
`;

const UploadInputBtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 350px;
`;

const UploadInputBtn = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#4267b2")};
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#2a4375")};
  }
`;

export default UploadInput;
