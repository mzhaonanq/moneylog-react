import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  border:1px solid red;
  height: 100vh;
  display:flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
`

const Layout =(props: any)=>{
  return(
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout