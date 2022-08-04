import React from "react";
import styled from "styled-components";
import { UploadInput } from "../components";

const Upload = () => {
  return (
    <UploadContainer>
      <UploadInput />
    </UploadContainer>
  );
};

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
  border-right: 2px solid black;
`;

export default Upload;
