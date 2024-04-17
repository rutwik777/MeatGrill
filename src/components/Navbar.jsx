import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  background-color: transparent;
  color: #ffffff;
  z-index: 999;
  height: 80px;
  opacity: 150%;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  // animation: reveal 4s;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Mobile clause */
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Logo = styled.img`
  height: 80px;
  width: 90px
  cursor: pointer;
  padding-left: 50px;
`;

const Title = styled.span`
  font-size: 26px;
  margin: 20px;
  font-family: "Cinzel Decorative", serif; 
  /* color: #fbf9f9; */
  cursor: pointer;
  text-decoration: underline rgba(0, 0, 0, 0);
  /* Mobile clause */
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration-color: #e30505;
    /* color: #e30505; */
  }
`;

const MenuItem = styled.a`
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  margin: 20px;
  /* Mobile Clause */
  text-decoration: underline rgba(0, 0, 0, 0);
  &:hover {
    text-underline-offset: 0.4em;
    /* -webkit-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.72);
    -moz-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.72); */
    /* box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.72); */
    text-decoration-color: #de0a0a;
  }
`;

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <Container>
      <div style={scrolling ? { backgroundColor: "black" } : {}}>
        <Wrapper>
          <Left>
            <Logo src="src/assets/Logo-modified.png" />
            <Title> Meat & Grill </Title>
          </Left>
          <Right>
            <MenuItem href="/"> Home </MenuItem>
            <MenuItem href="/about"> About Us </MenuItem>
            <MenuItem href="/services"> Services </MenuItem>
            <MenuItem href="/menu"> Menu </MenuItem>
            <MenuItem href="/team"> Gallery </MenuItem>
            <MenuItem> Contact Us </MenuItem>
          </Right>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Navbar;
