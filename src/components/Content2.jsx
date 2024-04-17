import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
`;

const Title = styled.h1`
  padding-left: 15px;
  font-weight: bold;
  margin-right: 20px;
  color: #b8a14f;
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  text-decoration-color: #bbac78;
  text-decoration-thickness: 5px;
  animation: slidein 4s;
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
`;

const Para = styled.p`
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 15px;
  font-size: 17px;
  color: white;
  animation: slidein 4s;
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
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  allign-items: space-evenly;
  justify-content: center;
  flex-direction: row;
`;

const Left = styled.div`
  padding: 5px; 
  display: flex;
  flex: 1;
  align-items: center;
  justify content;
`;

const Image = styled.img`
  max-width: 400px;
  height: 400px;
  border-radius: 12px;
`;

const Right = styled.div`
  flex: 3;
  margin: 10px;
  diplay: flex;
  flex-direction: column;
`;

const Content2 = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="src/assets/about.jpg" alt="" />
        </Left>
        <Right>
          <Title>Welcome to Meat & Grill Catering</Title>
          <Para>
            We specialize in live onsite catering for intimate gatherings,
            parties, weddings, corporate events, and more. Our recipes passed
            down through generations, bring flavour to life, ensuring an
            unforgettable culinary experience.
          </Para>
          <Para>
            We pride ourselves on sourcing the highest quality meats from
            trusted suppliers. We are awarded by the renowned Tom Hixon Of
            Smithfield’s London for Halal food. Windsor Farm Shop has awarded us
            with the Q Guild award for Hygiene.
          </Para>
          <Para>
            What sets us apart is our unwavering commitment to quality. With a
            focus on providing hassle-free service and the best food in town, we
            promise to deliver an experience that will impress you and your
            guests.
          </Para>
          <Para>
            Experience the magic of our traditional cooking methods, whether
            it's through our Traditional Tandoor or our handcrafted Mangal,
            ensuring the freshest and most delicious flavours possible. Guests
            can witness and savour the aromas right before their eyes.
          </Para>
          <Para>
            Our bespoke Mangal, designed and manufactured by Meat and Grill,
            offers optimal heat control for perfectly cooked, juicy food. This
            unique design is exclusive to HOME Catering, setting us apart from
            the rest.
          </Para>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Content2;
