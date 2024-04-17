import React from "react";
import styled from "styled-components";
// import buffetBG from '../b'
import Navbar from "./Navbar";

const Container = styled.div`
  position: relative;
  align-items: center;
  background: black;
  width: 100%;
`;

const Wrapper = styled.div`
  /* padding-top: 20px; */
  /* padding-bottom: 20px; */
  display: flex;
  justify-content: center;
`;

const FirstImage = styled.img`
  height: 600px;
  width: 100%;
  cursor: pointer;
  opacity: 50%;
  object-fit: cover;
  @keyframes slidein {
    0% {
      margin-left: 100px;
    }
    25% {
      margin-left: 100px;
    }
    50% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }
  animation: slidein 4s;
`;

const TextOnImage = styled.div`
  position: absolute;
  width: 55%;
  color: white;
  background-color: transparent !important;
  top: 35%;
  left: 25%;
  -webkit-animation: bounce 1.5s ease alternate;
  animation-delay: 1s;
  @-webkit-keyframes bounce {
    0% {
      text-shadow: 0 5px 0 #ccc, 0 2px 3px rgba(0, 0, 0, 1);
    }
    100% {
      transform: translateY(-20px);
      text-shadow: 0 50px 0 #black, 0 0px 20px rgba(0, 0, 0, 0.8);
    }
  }
`;

const Para = styled.p`
  padding: 20px;
  font-size: 27px;
  color: white;
  font-weight: 400;
`;

const Content1 = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <FirstImage
          // src="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_1280.jpg"
          // src="src/buffet-315691_1280.jpg"
          src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
          alt="First Image"
        />
        <TextOnImage>
          <Para>
            Welcome to Meat & Grill Catering, where we specialize in live onsite
            catering for intimate gatherings, parties, weddings, corporate
            events, and more.
          </Para>
          <Para>
            Our recipes passed down through generations, bring flavour to life,
            ensuring an unforgettable culinary experience.
          </Para>
        </TextOnImage>
        {/* <TextOnImage2>
            <Para>
            Our recipes passed down through
            generations, bring flavour to life, ensuring an unforgettable culinary experience.
            </Para>
          </TextOnImage2> */}
      </Wrapper>
    </Container>
  );
};

export default Content1;
