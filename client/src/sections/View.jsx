import React, { useState } from "react";
import styled from "styled-components";
import { getFile } from "../api/api";

const View = () => {
  const [files, setFiles] = useState([]);

  const tabLinks = ["Videos", "Images", "Texts", "Others"];

  const handleGetFile = async () => {
    try {
      const files = await getFile();
      setFiles(files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ViewWrapper>
      <ViewTabs>
        <ViewTabsList>
          {tabLinks.map((link, index) => (
            <ViewTabsLink key={index}>{link}</ViewTabsLink>
          ))}
        </ViewTabsList>
      </ViewTabs>
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
