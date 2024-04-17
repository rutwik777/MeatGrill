import React from "react";
import styled from "styled-components";
import Card from "./Menu/Card";
import { MainMenu } from "../data";

const Constainer = styled.div`
  padding: 50px 20px;
  background-color: black;
  height: 100%;
`;

const Title = styled.div`
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  margin: 5px;
  padding: 25px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const ServicesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Menu = () => {
  return (
    <Constainer>
      <Title>MENU</Title>
      <ServicesBlock>
        {MainMenu.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ServicesBlock>
    </Constainer>
  );
};

export default Menu;
