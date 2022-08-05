import React, { useState } from "react";
import styled from "styled-components";
import { UploadInput, UploadPreview } from "../components";

const Upload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (files) => {
    setFiles(files);
  };

  return (
    <UploadContainer>
      <UploadInput handleFileChange={(files) => handleFileChange(files)} />
      <UploadPreview files={files} />
    </UploadContainer>
  );
};

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  border-right: 2px solid black;
  margin-top: 200px;
`;

export default Upload;
