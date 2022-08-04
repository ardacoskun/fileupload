import React from "react";
import styled from "styled-components";

const View = () => {
  return <ViewContainer>View</ViewContainer>;
};

export const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`;

export default View;
