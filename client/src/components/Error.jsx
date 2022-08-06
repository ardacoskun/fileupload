import React from "react";
import styled from "styled-components";

const Error = ({ message, type }) => {
  return <ErrrorMessage type={type}>{message}</ErrrorMessage>;
};

const ErrrorMessage = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  color: ${({ type }) => (type === "success" ? "green" : "red")};
`;

export default Error;
