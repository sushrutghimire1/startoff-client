import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Navfooter from "./footer";
import { Link, Redirect } from "react-router-dom";
import FooterBar from "./FooterBar";
import "../Styles/cart.css";

function Header(props) {
  const itemCount = props.products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);

  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

function ProductList(props) {
  return (
    <section className="container">
      <ul className="products">
        {props.products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col-md-8 col-sm-12 ">
                <div className="row">
                  <div className="col-md-6 thumbnail">
                    <a href="#">
                      <img src={product.image} alt={product.name} />
                    </a>
                  </div>
                  <div className="col-md-6 detail">
                    <div className="name">
                      <a href="#">{product.name}</a>
                    </div>
                    <div className="description">{product.description}</div>
                    <div className="price">{formatCurrency(product.price)}</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={props.onChangeProductQuantity.bind(this, index)}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={props.onRemoveProduct.bind(this, index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary(props) {
  const subTotal = props.products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
  const discount = (subTotal * props.discount) / 100;
  const tax = props.tax;
  const total = subTotal - discount + tax;

  const handleBuy = (e) => {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    console.log({ product: props.products, userid: userid, total: total });
    axios
      .post("http://localhost:4000/payment/checkout", {
        userid: userid,
        product: props.products,
        total: total,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data + " checked out");
          console.log(
            "Error in props.history.push('/home'). May be beacuse of nested child of a component. tried using Router as well."
          );
          props.history.push("/home");
        }
      });
  };
  return (
    <section className="container" style={{ overflow: "hidden" }}>
      <div className="mx-5 px-5 promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={props.onEnterPromoCode} />
        <button type="button" onClick={props.checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button" onClick={handleBuy}>
          Check Out
        </button>
      </div>
    </section>
  );
}
function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      promotions: [],
      tax: 5,
      promoCode: "",
      discount: 0,
      itemCount: 0,
      user: undefined,
      page: "cart",
    };
  }
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    this.setState({ user: userid });
    axios
      .get("http://localhost:4000/cart/showProducts/" + userid)
      .then((res) => {
        this.setState({
          products: res.data.products,
          promotions: res.data.promotions,
        });
      });
  }
  onChangeProductQuantity = (index, event) => {
    const products = this.state.products;
    const value = event.target.value;
    const valueInt = parseInt(value);

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      products[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      products[index].quantity = valueInt;
    }

    this.setState({ products });
  };
  onRemoveProduct = (i) => {
    console.log(this.state.products[i]);
    axios
      .post("http://localhost:4000/cart/deleteProducts/", {
        userid: this.state.user,
        productId: this.state.products[i].productId,
      })
      .then((res) => {
        console.log(res.data);
      });
    const products = this.state.products.filter((product, index) => {
      return index !== i;
    });

    this.setState({ products });
  };

  onEnterPromoCode = (event) => {
    this.setState({
      promoCode: event.target.value,
    });
  };

  checkPromoCode = () => {
    const promotions = this.state.promotions;

    for (var i = 0; i < promotions.length; i++) {
      if (this.state.promoCode === promotions[i].code) {
        this.setState({
          discount: parseFloat(promotions[i].discount.replace("%", "")),
        });
        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  render() {
    const products = this.state.products;
    return (
      <div>
        <Navbar />
        <div className="cart mb-5">
          <Header products={products} />
          {products.length > 0 ? (
            <div>
              <ProductList
                products={products}
                onChangeProductQuantity={this.onChangeProductQuantity}
                onRemoveProduct={this.onRemoveProduct}
              />

              <Summary
                products={products}
                discount={this.state.discount}
                tax={this.state.tax}
                onEnterPromoCode={this.onEnterPromoCode}
                checkPromoCode={this.checkPromoCode}
              />
            </div>
          ) : (
            <div className="empty-product">
              <h3>There are no products in your cart.</h3>
              <button
                onClick={() => {
                  this.props.history.push("/home");
                }}
              >
                Shopping now
              </button>
            </div>
          )}
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default withRouter(cart);
