import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getFile, getFileType } from "../api/api";
import { Tabs, ViewLayout } from "../components";

const View = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const tabLinks = ["video", "image", "text"];

  const handleGetType = async (link) => {
    setLoading(true);
    try {
      const filteredFiles = await getFileType(link);
      setSelectedFiles(filteredFiles);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <ViewWrapper>
      <ViewContainer>
        <ViewTabs>
          <Tabs tabLinks={tabLinks} handleGetType={handleGetType} />
        </ViewTabs>
        <ViewLayout
          selectedFiles={selectedFiles}
          alert={alert}
          loading={loading}
        />
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
