
import styled from 'styled-components';
import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackagingList';
import Stats from './components/Stats';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
function App() {
  const [list, setList] = useState([]);
  const [percentage ,setPercentage] = useState(0);
  const [count,setCount] = useState(0)
  return (
    <Container>
      <Logo />
      <Form list={list} setList={setList}/>
      <PackingList list={list} setList={setList} count={count} setCount={setCount}/>
      <Stats list={list} setList={setList} count={count} setCount={setCount} percentage={percentage} setPercentage={setPercentage}/>
    </Container>
  );
}

export default App;