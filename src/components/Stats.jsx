import React, { useState } from "react";
import styled from "styled-components";
import bag from "../images/Bag.png";

const Container = styled.div`
  background-color: #67c1a3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #303b27;
`;
const Focus = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #e54c21;
`;

const Stats = ({ list, count, percentage, setPercentage }) => {
  const per = (count / list.length) * 100;
  setPercentage(per);
  return (
    <Container>
      <Text>
        There are<Focus> {list.length} </Focus>
        items in your list, and you have packed{" "}
        <Focus>
          {" "}
          {count} ({Math.floor(percentage) ? Math.ceil(percentage) : 0}
          %){" "}
        </Focus>
      </Text>
    </Container>
  );
};

export default Stats;
