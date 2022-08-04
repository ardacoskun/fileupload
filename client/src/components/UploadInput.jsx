import React, { useState } from "react";
import styled from "styled-components";
import cloudImage from "../assets/cloud.png";
import PropTypes from "prop-types";
import { upload } from "../api/api";

const UploadInput = (props) => {
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.files[0]) {
      setFiles(e.target.files[0]);
      props.onFileChange(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", files);
    await upload(formData);
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
        <UploadInputBtn
          disabled={files.length < 1 && true}
          onClick={handleUpload}
        >
          Upload
        </UploadInputBtn>
      </UploadInputBtnContainer>
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
  margin-top: 200px;

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
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #4267b2;
  display: ${({ disabled }) => (disabled ? "none" : "block")};
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #2a4375;
  }
`;

UploadInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default UploadInput;
