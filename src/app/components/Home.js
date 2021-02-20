import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import Carousel from "./homeComponents/carousel";
import ItemCatalog from "./homeComponents/itemCatalog";
import Coupons from "./homeComponents/Coupons";
import FeaturedProductCatalog from "./homeComponents/FeaturedProductCatalog";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";
import "../Styles/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
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
  }
}

export default Home;
