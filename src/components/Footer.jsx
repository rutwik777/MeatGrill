import { Facebook, Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  padding: 40px 40px;
  background: #000000;
  @media (max-width: 400px) {
    padding: 70px 30px;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100%;
    /* background: red; */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Link = styled.a`
  color: #fffcfc;
  margin-bottom: 5px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`;

const Payment = styled.img`
  margin-top: 5px;
  width: 100%;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Column>
                <Title>Information</Title>
                    <Link href="#">About us</Link>
                    <Link href="#">Sustainability</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms & Condition</Link>
            </Column>
            <Column>
                <Title>Meet & Grill Caterers</Title>
                    <Link href="#">44 Oak Tree Lane, Selly Oak, Birmingham, 2BA 6HX</Link>
                    <Link href="#">T: +44 4876842121</Link>
            </Column>
            <Column>
                <SocialContainer>
                {/* color="3B5999" */}
                    <SocialIcon color="3B5999" href="#">
                        <Facebook/>
                    </SocialIcon>
                    {/* color="E4405F" */}
                    <SocialIcon color="E4405F" href="#">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="0F0205" href="#">
                        <XIcon />
                    </SocialIcon>
                </SocialContainer>
                <Title>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
                </Title>
            </Column>
        </Wrapper>
    </Container>
  )
}

export default Footer