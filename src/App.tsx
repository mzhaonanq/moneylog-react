import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  border:1px solid red;
  height: 100vh;
  display:flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
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
        <Nav/>
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