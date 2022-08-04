import React, { useState } from "react";
import styled from "styled-components";
import cloudImage from "../assets/cloud.png";

const UploadInput = () => {
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
  };

  return (
    <UploadInputWrapper>
      <UploadInputContainer>
        <UploadInputImage src={cloudImage} alt="upload" />
        <h2>Choose a file or drag it here</h2>
      </UploadInputContainer>
      <input type="file" value="" onChange={handleInputChange} />
    </UploadInputWrapper>
  );
};

const UploadInputWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  border: 2px dashed var(--border-color);
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

export default UploadInput;
