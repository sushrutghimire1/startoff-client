import React, { Component } from "react";
import axios from "axios";
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
//import AuthenticationService from "../services/AuthenticationService";
class Home extends Component {
  constructor(props) {
    super(props);
    //const user = AuthenticationService.getCurrentUser();
    this.state = {
      login: {},
      itemCatalog: [],
      coupons: [],
      featuredProductCatalog: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/home/loginInfo").then((res) => {
      this.setState({ login: res.data });
      //console.log("loginInfo", res.data);
    });

    axios.get("http://localhost:4000/home/coupon").then((res) => {
      this.setState({ coupons: res.data });
      //console.log("coupon", res.data);
    });

    axios.get("http://localhost:4000/home/itemCatalog").then((res) => {
      this.setState({ itemCatalog: res.data });
      //console.log("itemCatalog", res.data);
    });
    // axios
    //   .get("http://localhost:4000/home/featuredProductCatalog")
    //   .then((res) => {
    //     this.setState({ featuredProductCatalog: res.data });
    //     //console.log("featuredProductCatalog", res.data);
    //   });
    //FeaturedProductCatalog is a class component while others are functional component
  }

  render() {
    return (
      <div className="home">
        <Navbar login={this.state.login} />
        <Carousel />
        <Container fluid>
          <ItemCatalog item={this.state.itemCatalog} />
          <Coupons coupon={this.state.coupons} />
          <FeaturedProductCatalog item={this.state.featuredProductCatalog} />
        </Container>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default Home;
