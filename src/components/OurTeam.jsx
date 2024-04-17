import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";
import { CompanyTeam } from "../data";

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

const TeamBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const OurTeam = () => {
  return (
    <Constainer>
      <Title>OUR TEAM</Title>
      <TeamBlock>
        {CompanyTeam.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </TeamBlock>
    </Constainer>
  );
};

export default OurTeam;
