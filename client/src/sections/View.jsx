import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getFile, getFileType } from "../api/api";
import { Tabs, ViewLayout } from "../components";

const View = () => {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(files);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const tabLinks = ["video", "image", "text"];

  useEffect(() => {
    const handleGetFile = async () => {
      const files = await getFile();
      if (files) {
        setFiles(files);
      } else {
        setAlert({
          type: "error",
          message: files.data,
        });
      }
    };
    handleGetFile();
  }, [selectedFiles]);

  const handleGetType = async (link) => {
    try {
      const files = await getFileType(link);
      console.log("files", files);
    } catch (error) {}
  };

  return (
    <ViewWrapper>
      <ViewContainer>
        <ViewTabs>
          <Tabs tabLinks={tabLinks} handleGetType={handleGetType} />
        </ViewTabs>
        <ViewLayout selectedFiles={selectedFiles} alert={alert} />
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
