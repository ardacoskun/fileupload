import React from "react";
import styled from "styled-components";
import cloud from "../assets/cloud.png";

const UploadPreview = ({ files }) => {
  return (
    <>
      {files.length !== 0 ? (
        <UploadPreviewWrapper>
          <UploadPreviewContainer>
            <img src={cloud} alt="previewIcon" />
            <UploadPreviewInfo>
              <h4>{files.name}</h4>
              <h4>{files.type.split("/")[1].toUpperCase() || "unknown"}</h4>
            </UploadPreviewInfo>
            <UploadPreviewCancelBtn>x</UploadPreviewCancelBtn>
          </UploadPreviewContainer>
        </UploadPreviewWrapper>
      ) : null}
    </>
  );
};

const UploadPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  border-right: 2px solid black;
  margin-top: 50px;
`;

const UploadPreviewContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  border: 1px solid black;
  padding: 15px;
  border-radius: 20px;

  img {
    width: 50px;
  }
`;

const UploadPreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: auto 70px;
    text-align: center;
  }
`;

const UploadPreviewCancelBtn = styled.span`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: red;
`;

export default UploadPreview;
