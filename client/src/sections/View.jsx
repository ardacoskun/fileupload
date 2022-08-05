import React, { useState } from "react";
import styled from "styled-components";
import { getFile } from "../api/api";

const View = () => {
  const [files, setFiles] = useState([]);

  const handleGetFile = async () => {
    try {
      const files = await getFile();
      setFiles(files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ViewContainer>
      <button onClick={handleGetFile}>Get File</button>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`;

export default View;
