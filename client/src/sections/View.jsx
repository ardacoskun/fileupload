import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getFile } from "../api/api";
import { ViewLayout } from "../components";

const View = () => {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(files);

  const tabLinks = ["Videos", "Images", "Texts", "Others"];

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
    if (link.toLowerCase() === "videos") {
      const filteredFiles = files.filter((file) =>
        file.fileType.includes("video")
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (link.toLowerCase() === "images") {
      const filteredFiles = files.filter((file) =>
        file.fileType.includes("image")
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (link.toLowerCase() === "texts") {
      const filteredFiles = files.filter(
        (file) =>
          file.fileType.includes("text") ||
          file.fileType.includes("application")
      );
      setSelectedFiles([...filteredFiles]);
    }
    if (link.toLowerCase() === "others") {
    }
  };

  return (
    <ViewWrapper>
      <ViewContainer>
        <ViewTabs>
          <ViewTabsList>
            {tabLinks.map((link, index) => (
              <ViewTabsLink key={index} onClick={() => handleGetType(link)}>
                {link}
              </ViewTabsLink>
            ))}
          </ViewTabsList>
        </ViewTabs>
        <ViewLayout selectedFiles={selectedFiles} />
      </ViewContainer>
    </ViewWrapper>
  );
};

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const ViewTabsList = styled.ul`
  display: flex;
  list-style-type: none;
  border-bottom: 2px solid black;
  padding: 20px;
  font-size: 20px;
`;

const ViewTabsLink = styled.li`
  margin: auto 40px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #4267b2;
  }

  &:active {
    color: #4267b2;
  }
`;

export default View;
