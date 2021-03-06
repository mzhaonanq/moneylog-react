import React from "react";
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import {Record} from 'views/Record'

const AppWrapper = styled.div`
  color: #333;
`

 function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect from="/" exact to="/money" />
          <Route exact path="/tags/:id" >
            <Tag />
          </Route>
          <Route exact path="/tags" >
            <Tags />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route exact path="/statistics/:id">
            <Record />
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>

  );
}
export default App