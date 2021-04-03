import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../Styles/FeaturedProductCatalog.css";
class FeaturedProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCart: [],
      FeaturedItems: props.item,
    };
  }
  addCartHandler = (item) => {
    let temp = this.state.addCart;
    temp.push(item);
    this.setState(temp);
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/home/featuredProductCatalog")
      .then((res) => {
        this.setState({ FeaturedItems: res.data });
        //console.log("featuredProductCatalog", res.data);
      });
  }
  // componentDidMount() {
  //   var items = this.props.item;
  //   console.log(this.props);
  //   this.setState({ FeaturedItems: items });
  // }
  render() {
    const displayFeaturedItem = this.state.FeaturedItems.map((item) => {
      return (
        <div className="product-grid__product-wrapper" key={item.id}>
          <div className="product-grid__product">
            <div className="product-grid__img-wrapper">
              <img alt="Img" className="product-grid__img" src={item.img} />
            </div>
            <span className="product-grid__title">{item.title}</span>
            <span className="product-grid__price">{item.price}</span>
            <div className="product-grid__extend-wrapper">
              <div className="product-grid__extend">
                <p className="product-grid__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis velit itaque odit. {item.desp}
                </p>
                <span
                  className="product-grid__btn product-grid__add-to-cart"
                  onClick={() => {
                    this.addCartHandler(item.id);
                  }}
                >
                  <i className="fa fa-cart-arrow-down"></i> Add to cart
                </span>
                <span className="product-grid__btn product-grid__view">
                  <Link to={"/product/" + item.id}>
                    <i className="fa fa-eye"></i> View more
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="content FeaturedProductCatalog">
        <h1 style={{ textAlign: "center" }} className="section-head">
          Featured Products
        </h1>
        <div className="product-grid product-grid--flexbox">
          <div className="product-grid__wrapper">{displayFeaturedItem}</div>
        </div>
      </div>
    );
  }
}

export default FeaturedProductCatalog;
