import React, { Component } from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Carousel from "./homeComponents/carousel";
import ItemCatalog from "./homeComponents/itemCatalog";
import Coupons from "./homeComponents/Coupons";
import FeaturedProductCatalog from "./homeComponents/FeaturedProductCatalog";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";
import "../Styles/Home.css";
import AuthenticationService from "../services/AuthenticationService";
class Home extends Component {
  constructor(props) {
    super(props);
    const user = AuthenticationService.getCurrentUser();
    this.state = { user: user, page: "home" };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({ user: user.id });
    console.log(this.state);
    console.log(JSON.parse(localStorage.getItem("user")).id);
  }

  render() {
    const user = this.state.user;
    if ((user && user.jwt) || true) {
      return (
        <div className="home">
          <Navbar />
          <Carousel />
          <Container fluid>
            <ItemCatalog />
            <Coupons />
            <FeaturedProductCatalog />
          </Container>
          <FooterBar />
          <Navfooter />
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/signin" />
        </div>
      );
    }
  }
}

export default Home;
