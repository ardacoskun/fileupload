import React from "react";
import styled from "styled-components";
import cloud from "../assets/cloud.png";

const UploadPreview = (props) => {
  const handleCancel = () => {
    props.cancelFiles("");
  };
  return (
    <>
      <UploadPreviewWrapper>
        {props.files ? (
          <UploadPreviewContainer>
            <img src={cloud} alt="previewIcon" />
            <UploadPreviewInfo>
              <h4>{props.files.name}</h4>
              <h4>
                {props.files.type.split("/")[1].toUpperCase() ||
                  props.files.name.slice(-4)}
              </h4>
            </UploadPreviewInfo>
            <UploadPreviewCancelBtn onClick={handleCancel}>
              x
            </UploadPreviewCancelBtn>
          </UploadPreviewContainer>
        ) : null}
      </UploadPreviewWrapper>
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
  margin-right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: red;
`;

export default UploadPreview;
