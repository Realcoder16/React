import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Map from "./Map";
import Profile from "./Profile";
import Login from "./Login";
import Registration from "./Registration";
import { Header } from "./Header";

import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{background-color: black;}`;

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header className={this.props.className} />
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  navigateTo: PropTypes.func,
};

export default App;
