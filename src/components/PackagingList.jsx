import React from "react";
import styled from "styled-components";
import List from "./List.jsx";

const sortingArr = [
  "Sort by Number of Items",
  "Sort by Item Names",
  "sort by Packed List",
];
const Container = styled.div`
  background-color: #4c3423;
  height: 56vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Sorting = styled.select`
  color: #2e1808 !important;
  background-color: #fde7aa;
  border: none;
  font-size: 14px;
  padding: 7px 15px;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;
const Button = styled.button`
  background-color: #fde7aa;
  color: #2e1808 !important;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;
const PackingList = ({ list, setList, count, setCount }) => {
  // clear button
  const clear = () => {
    const Lists = [...list];
    Lists.length = 0;
    console.log(Lists.length);
    setList(Lists);
    console.log(Lists);
  };

  const sorthandler = (val) => {
    if (val == 0) {
      // it returns 1, indicating that a should come after b in the sorted array
      list.sort((a, b) => (a.Quantity > b.Quantity ? -1 : 1));
      const myList = [...list];
      setList(myList);
    }
    if (val == 1) {
      list.sort((a, b) => (a.Item > b.Item ? 1 : -1));
      const myList = [...list];
      setList(myList);
    }
    if (val == 2) {
      // if a.Packed is equal to b.Packed. If they are equal, the comparison function returns 0, indicating that a and b are considered equal in terms of sorting
      //It then checks if a.Packed is truthy. If a.Packed is truthy (meaning it's considered "packed"), the function returns -1. This indicates that a should come before b in the sorted array.
      list.sort((a, b) => (a.Packed == b.Packed ? 0 : a.Packed ? -1 : 1));
      const myList = [...list];
      setList(myList);
    }
  };
  return (
    <Container>
      <List list={list} setList={setList} count={count} setCount={setCount} />
      <Wrapper>
        <Sorting onChange={(e) => sorthandler(e.target.value)}>
          {sortingArr.map((e, index) => (
            <option style={{ textTransform: "uppercase" }} value={index}>
              {e}
            </option>
          ))}
        </Sorting>
        <Button onClick={clear}>Clear List</Button>
      </Wrapper>
    </Container>
  );
};

export default PackingList;
