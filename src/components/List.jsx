import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0px 10px;
`
const Item = styled.div`
    display: flex;
    gap: 5px;
    background-color: #6cbea5;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-radius: 5px;
`
const Input = styled.input`
    width: 15px;
    height: 15px;
`
const Quantity = styled.p`
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    color: #2e1808 !important;
    `
const ItemName = styled.div`
    font-size: 18px;
    font-weight: 600;

    letter-spacing: 2px;
    color: #2e1808 !important;
`
const Cross = styled.button`
    color: red;
    background:none;
    border: none;
    padding: 0;
    display: flex;
    align-items: flex-end;
`
const List = ({ list, setList,count,setCount }) => {
    const packingHandler = (packingstatus, itemNumber) => {
        const Lists = [...list]
        Lists[itemNumber].Packed = !packingstatus
        setList(Lists)
    }
    const filter = list.filter((e)=>{
       return  e.Packed === true
    })
    setCount(filter.length)
    // console.log(Count)
    return (
        <Container>
            {list.map((list, index) => (
                <Item style={{ textDecoration: list.Packed ? "line-through" : "none" }}>
                    <Input type='checkbox' checked={list.Packed} onChange={() => packingHandler(list.Packed, index)} />
                    <Quantity>{list.Quantity}</Quantity>
                    <ItemName>{list.Item}</ItemName>
                    <Cross></Cross>
                </Item>
            ))}
        </Container>
    )
}

export default List