import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import emoji from "../images/emoji.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #df6b1b;
  padding: 20px 0;
  gap: 20px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
const Trip = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 0px;
  display: flex;
  align-items: center;
`;
const Emoji = styled.img`
  width: 30px;
  height: 30px;
`;
const Numbers = styled.select`
  background-color: #fde7aa;
  border: none;
  font-size: 18px;
  padding: 8px 8px;
  border-radius: 20px;
  width: 50px;
  outline: none;
`;
const Input = styled.input`
  background-color: #fde7aa;
  border: none;
  font-size: 18px;
  padding: 8px 8px;
  border-radius: 20px;
  color: #000;
  outline: none;
`;
const Button = styled.button`
  background-color: #67c1a3;
  padding: 7px 10px;
  border: none;
  outline: none;
  border-radius: 20px;
  font-weight: 600;
  font-family: sans-serif;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const Form = ({ list, setList }) => {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");
  const [numbersArr, setNumbersArr] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    setNumbersArr(arr);
  }, []);

  const add = useCallback(() => {
    const copyList = [...list];
    const addItem = {
      Quantity: quantity,
      Item: item,
      Packed: false,
    };
    copyList.push(addItem);
    setList(copyList);
    setItem("");
    setQuantity(1);
  }, [list, quantity, item, setList]);

  return (
    <Container>
      <Trip>
        Add an item to your packing trip!
        <Emoji src={emoji} />
      </Trip>

      <Wrapper>
        <Numbers onChange={(e) => setQuantity(e.target.value)} value={quantity}>
          {numbersArr.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </Numbers>
        <Input
          type="text"
          placeholder="...items"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button onClick={add}>ADD</Button>
      </Wrapper>
    </Container>
  );
};

export default Form;
