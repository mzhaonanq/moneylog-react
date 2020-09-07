import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';




 function App() {
  return (
    <Router>

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


    </Router>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>


  )
}

function Tags() {
  return(
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>数据页面</h2>
    </Layout>
    )
}

function NoMatch(){
  return <div>当前页面不存在</div>
}
export default App