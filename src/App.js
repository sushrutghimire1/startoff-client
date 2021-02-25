import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import cart from "./app/components/cart";
import Orders from "./app/components/Orders";
import Product from "./app/components/Product";
import Search from "./app/components/search";

import Career from "./app/components/career";

import SignUp from "./app/auth/SignUp";
import FillDetails from "./app/auth/fillDetails";
import Signin from "./app/auth/Signin";
import SignOut from "./app/auth/SignOut";
import forgotpass from "./app/auth/forgotpass";
import termCondition from "./app/auth/termCondition";
import AuthenticationService from "./app/services/AuthenticationService";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Signin} />
          <Route path="/signin" exact={true} component={Signin} />
          <Route path="/fillDetails" exact={true} component={FillDetails} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/signout" component={SignOut} />
          <Route path="/forgotpass" component={forgotpass} />
          <Route path="/termCondition" component={termCondition} />

          <Route path="/career" component={Career} />

          <Route path="/home" exact={true} component={Home} />
          {AuthenticationService.getCurrentUser() && (
            <Route path="/cart" exact={true} component={cart} />
          )}
          {AuthenticationService.getCurrentUser() && (
            <Route path="/profile" exact={true} component={Profile} />
          )}

          {AuthenticationService.getCurrentUser() && (
            <Route path="/orders" exact={true} component={Orders} />
          )}
          <Route path="/product/:product_id" component={Product} />

          <Route path="/search/:value" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
