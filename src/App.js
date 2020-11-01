import React from "react";
import './App.css';
import HomePage from './HomePage.js';
import Header from './Header.js';
import PokePage from './PokePage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

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
            {/* <Route
              path="/fetch"
              exact
              render={(routerProps) => <ListPage {...routerProps} />} */}
            {/* /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}


