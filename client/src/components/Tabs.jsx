import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tabs = (props) => {
  return (
    <ViewTabsList>
      {props.tabLinks.map((link, index) => (
        <Link to={`/${link}`} key={index}>
          <ViewTabsLink>{`${link.toUpperCase()}S`}</ViewTabsLink>
        </Link>
      ))}
    </ViewTabsList>
  );
};

const ViewTabsList = styled.ul`
  display: flex;
  justify-content: center;
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

export default Tabs;
