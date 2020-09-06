import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
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
const Nav = styled.nav`
  border:1px solid blue ;
  > ul{
  display:flex;
    > li{
    width: 33.33%;
    text-align: center;
    padding: 16px;
    }
  }
`

 function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect from="/" exact to="/money" />
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/">记账</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistics">数据</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>记账页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Statistics() {
  return <h2>数据页面</h2>;
}

function NoMatch(){
  return <div>当前页面不存在</div>
}
export default App