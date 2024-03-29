import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f19720;
`;
const Wrapper = styled.div`
  width: 60%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.p`
  font-size: 45px;
  color: #683500;
  font-weight: 900;
  margin: 0;
  letter-spacing: 10px;
`;
const Logo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>FARAWAY</Title>
      </Wrapper>
    </Container>
  );
};

export default Logo;
