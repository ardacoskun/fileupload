import React from "react";
import styled from "styled-components";
import { UploadInput, UploadPreview } from "../components";

const Upload = () => {
  return (
    <UploadContainer>
      <UploadInput />
      <UploadPreview />
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

export default React.memo(Upload);
