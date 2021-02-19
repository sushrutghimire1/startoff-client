import React, { Component } from "react";
import "../../Styles/FeaturedProductCatalog.css";
class FeaturedProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCart: [],
    };
  }
  addCartHandler = (item) => {
    let temp = this.state.addCart;
    temp.push(item);
    this.setState(temp);
  };
  render() {
    var FeaturedItems = [
      {
        id: 1,
        img: "img1.jpg",
        title: "product item 1",
        price: 2.3369,
        desp: "description",
      },
      {
        id: 2,
        img: "img2.jpg",
        title: "product item 2",
        price: 2.3369,
        desp: "description",
      },
      {
        id: 3,
        img: "img3.jpg",
        title: "product item 3",
        price: 2.3369,
        desp: "description",
      },
      {
        id: 4,
        img: "img4.jpg",
        title: "product item 4",
        price: 2.3369,
        desp: "description",
      },
      {
        id: 5,
        img: "img5.jpg",
        title: "product item 5",
        price: 2.3369,
        desp: "description",
      },
      {
        id: 6,
        img: "img6.jpg",
        title: "product item 6",
        price: 2.3369,
        desp: "description",
      },
    ];
    const displayFeaturedItem = FeaturedItems.map((item) => {
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
                  <i className="fa fa-eye"></i> View more
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
