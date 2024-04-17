import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";
import { CompanyServices } from "../data";

const Constainer = styled.div`
  padding: 50px 20px;
  background-color: black;
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
  justify-content: space-around;
`;

const Services = () => {
  return (
    <Constainer>
      <Title>OUR SERVICES</Title>
      <ServicesBlock>
        {CompanyServices.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ServicesBlock>
    </Constainer>
  );
};

export default Services;
