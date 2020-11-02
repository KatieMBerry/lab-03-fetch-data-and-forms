import React from "react";
import './App.css';
import HomePage from './HomePage.js';
import Header from './Header.js';
import PokePage from './PokePage.js';
import DetailPage from './DetailPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/list"
              exact
              render={(routerProps) => <PokePage {...routerProps} />}
            />
            <Route
              path="/pokemon/:name"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}


