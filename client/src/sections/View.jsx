import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getFile } from "../api/api";
import { Tabs, ViewLayout } from "../components";

const View = () => {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(files);

  const tabLinks = ["video", "image", "text", "other"];

  useEffect(() => {
    const handleGetFile = async () => {
      try {
        const files = await getFile();
        setFiles(files);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetFile();
  }, [selectedFiles]);

  const handleGetType = (link) => {
    if (`${link}s`.toLowerCase() === "videos") {
      const filteredFiles = files.filter((file) =>
        file.fileType.includes(link)
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (`${link}s`.toLowerCase() === "images") {
      const filteredFiles = files.filter((file) =>
        file.fileType.includes(link)
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (`${link}s`.toLowerCase() === "texts") {
      const filteredFiles = files.filter(
        (file) =>
          file.fileType.includes(link) || file.fileType.includes("application")
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (`${link}s`.toLowerCase() === "others") {
    }
  };

  return (
    <ViewWrapper>
      <ViewContainer>
        <ViewTabs>
          <Tabs tabLinks={tabLinks} handleGetType={handleGetType} />
        </ViewTabs>
        <ViewLayout selectedFiles={selectedFiles} />
      </ViewContainer>
    </ViewWrapper>
  );
};

const ViewWrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewTabs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export default View;
