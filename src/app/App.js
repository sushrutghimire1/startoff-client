import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import cart from "./app/components/cart";
import Orders from "./app/components/Orders";

import SignUp from "./app/auth/SignUp";
import Signin from "./app/auth/Signin";
import SignOut from "./app/auth/SignOut";
import forgotpass from "./app/auth/forgotpass";
import termCondition from "./app/auth/termCondition";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Signin} />
          <Route path="/signin" exact={true} component={Signin} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/signout" component={SignOut} />
          <Route path="/forgotpass" component={forgotpass} />
          <Route path="/termCondition" component={termCondition} />

          <Route path="/home" exact={true} component={Home} />
          <Route path="/cart" exact={true} component={cart} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route path="/orders" exact={true} component={Orders} />
        </Switch>
      </Router>
    );
  }
}

export default App;
