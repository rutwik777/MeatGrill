import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CompanyCategories } from "../data";
import CatageoryCard from "./CatagoryCard/CatageoryCard";

const Conatiner = styled.div`
  padding: 50px 20px;
  background-color: #000000;
`;

const Title = styled.div`
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  padding: 30px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const CompanyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Conatiner>
      <Title>OUR CLIENTS</Title>
      <Carousel
        infinite={true}
        arrows={false}
        partialVisible={false}
        responsive={responsive}
        autoPlay={true}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {CompanyCategories.map((item) => (
          <CatageoryCard item={item} key={item.id} />
        ))}
      </Carousel>
    </Conatiner>
  );
};

export default CompanyCarousel;
