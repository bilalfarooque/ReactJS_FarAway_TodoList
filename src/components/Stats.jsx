import React, { useState } from 'react'
import styled from 'styled-components'
import bag from '../images/Bag.png'

const Container = styled.div`
    background-color: #67c1a3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    gap: 20px;
`

const Text = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #303b27;
`
const Stats = ({ list,count,percentage,setPercentage }) => {
    const per = (count/list.length)*100
    setPercentage(per)
  return (
    <Container>
      <Text>There are {list.length} items in your list, and you have packed {count} ({Math.ceil(percentage)}%)</Text>
    </Container>
  )
}

export default Stats