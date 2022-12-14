import React, { useState } from "react";
import styled from "styled-components";
import { deleteFile, downloadFile } from "../api/api";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const ViewLayout = ({ selectedFiles, alert, loading }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this file ?")) {
      await deleteFile(id);
      navigate(0);
    }
  };

  const handleDownload = async (id, fileName) => {
    try {
      await downloadFile(id, fileName);
    } catch (error) {
      setError("Download Failed");
    }
  };

  if (error) {
    alert(error);
  }

  return (
    <ViewLayoutWrapper>
      {!loading ? (
        alert.message ? (
          <Error message={alert.message} type={alert.type} />
        ) : selectedFiles.length > 0 ? (
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
                  <h4>
                    {file.fileType.length > 30
                      ? `${file.fileType.split("/")[1].slice(0, 30)}.....`
                      : file.fileType.split("/")[1]}
                  </h4>
                </Tab>
                <Tab>
                  <h2>Upload Date</h2>
                  <h4>{file.uploadDate}</h4>
                </Tab>
                <ViewLayoutBtnContainer>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleDelete(file._id)}
                  >
                    delete
                  </span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleDownload(file._id, file.fileName)}
                  >
                    download
                  </span>
                </ViewLayoutBtnContainer>
              </ViewLayoutCard>
            </ViewLayoutContainer>
          ))
        ) : (
          <h1>There is no file in here</h1>
        )
      ) : (
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading...
        </h1>
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

const ViewLayoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s;
    }
  }
  span:nth-child(1) {
    color: red;
    font-size: 30px;
  }
  span:nth-child(2) {
    color: #4267b2;
    font-size: 30px;
    margin-left: 20px;
  }
`;

export default ViewLayout;
