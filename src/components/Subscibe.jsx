import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  padding: 40px 40px;
  height: 35vh;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 40%;
  margin: 5px;
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.2em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  /* text-align: center; */
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  /* text-align: center; */
`;

const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  height: 50px;
  flex: 7;
  height: 95%;
  font-size: 1rem;
  border-radius: 4px;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 80%;
  height: 50px;
  flex: 1;
  border: none;
  border-radius: 5px;
  background-color: #802900;
  color: #ffffff;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Newsletter = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Title>Subscribe</Title>
          <Desc>
            Get exclusive offers and updates about your favorite products.
          </Desc>
        </Left>
        <Right>
          <InputContainer>
            <Input placeholder="Enter your email" />
            <Button>
              {/* <Send /> */}
              <ArrowForwardIosIcon />
            </Button>
          </InputContainer>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Newsletter;
