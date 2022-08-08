import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getFileType } from "../api/api";
import { Tabs, ViewLayout } from "../components";
import { Upload } from "../sections";

const View = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });
  const { type } = useParams();

  const tabLinks = ["video", "image", "text"];

  useEffect(() => {
    handleGetType(type);
  }, [type]);

  const handleGetType = async (type) => {
    setLoading(true);
    try {
      const filteredFiles = await getFileType(type);
      setSelectedFiles(filteredFiles);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <ViewWrapper>
      <Upload />
      <ViewContainer>
        <ViewTabs>
          <Tabs tabLinks={tabLinks} />
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 200px;
`;

const ViewTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default View;
