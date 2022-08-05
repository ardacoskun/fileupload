import React from "react";
import styled from "styled-components";

const ViewLayout = ({ selectedFiles }) => {
  return (
    <ViewLayoutWrapper>
      {selectedFiles.length > 0 ? (
        selectedFiles.map((file, index) => (
          <ViewLayoutContainer key={index}>
            <ViewLayoutCard>
              <Tab>
                <h2>Name</h2>
                <h4>{file.fileName}</h4>
              </Tab>
              <Tab>
                <h2>Size</h2>
                <h4>{file.fileSize}</h4>
              </Tab>
              <Tab>
                <h2>Type</h2>
                <h4>{file.fileType}</h4>
              </Tab>
              <Tab>
                <h2>Upload Date</h2>
                <h4>{file.uploadDate}</h4>
              </Tab>
            </ViewLayoutCard>
          </ViewLayoutContainer>
        ))
      ) : (
        <h1>{`There is no files in here.`}</h1>
      )}
    </ViewLayoutWrapper>
  );
};

const ViewLayoutWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 20px;
  h1 {
    text-align: center;
  }
`;

const ViewLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

const ViewLayoutCard = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #c5c2c2;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }

  h4 {
    color: #4267b2;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5px;

  h2 {
    text-decoration: underline;
    margin-bottom: 10px;
  }
`;

export default ViewLayout;
