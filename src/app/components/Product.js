import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./footer";
import Footerbar from "./FooterBar";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import "../Styles/review.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        reviews: [],
        offers: [],
      },
      productId: 0,
    };
  }
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.product_id;
    this.setState({ productId: id });
    //fetch product details and update here.
    axios.get("http://localhost:4000/products/tag/" + id).then((res) => {
      this.setState({ product: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="product">
        <Navbar />
        <div className="container">
          <Paper className="m-3 p-2">
            <h1>{this.state.product.productName}</h1>
            <div className="row m-1">
              <div className="col-md-4 col-sm-12">
                <div className="productImage p-2">
                  <img
                    src={this.state.product.image}
                    className="img-fluid rounded mx-auto d-block"
                    alt="ProductImage"
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="d-flex mb-3">
                  <Chip
                    clickable
                    style={{
                      background: "rgb(80, 205, 255)",
                      color: "rgb(214 109 0)",
                      fontSize: "1.5rem",
                    }}
                    label={this.state.product.rating}
                    className="px-3 mr-2"
                  />{" "}
                  {this.state.product.reviews
                    ? this.state.product.reviews.length
                    : 0}{" "}
                  ratings
                </div>
                <div className="d-flex mb-3">
                  <h5>
                    <em>Rs</em>
                  </h5>
                  <h1>{this.state.product.price}</h1>
                </div>
                <div className="d-flex mb-3">
                  <div className="btn btn-info px-5">
                    <h5>
                      {this.state.product.stock > 0
                        ? this.state.product.stock
                        : "No"}{" "}
                      stock
                    </h5>
                  </div>
                </div>
                <div className="d-flex">
                  <strong>
                    <h3>Available Offers</h3>
                  </strong>
                </div>
                <div className="d-flex mb-3">
                  <br />
                  <ul>
                    {this.state.product ? (
                      this.state.product.offers.map((offer, index) => (
                        <li>
                          <strong>{offer.expDate}</strong>-:{" "}
                          <em>{offer.offerDetails}</em>
                        </li>
                      ))
                    ) : (
                      <p>No offers</p>
                    )}
                  </ul>
                </div>
                <Paper
                  style={{
                    background: "rgb(189, 236, 255)",
                    padding: "1rem",
                    marginRight: "3rem",
                    marginTop: "1rem",
                  }}
                >
                  <div className="d-flex">
                    <strong>
                      <h4 style={{ color: "rgb(255, 64, 0)" }}>Description</h4>
                    </strong>
                  </div>
                  <div className="d-flex w-50">{this.state.product.desp}</div>
                </Paper>
                <Paper
                  style={{
                    background: "rgb(240, 240, 240)",
                    padding: "1rem",
                    marginRight: "3rem",
                    marginTop: "1rem",
                  }}
                >
                  <div className="d-flex">
                    <strong>
                      <h4 style={{ color: "rgb(255, 64, 0)" }}>
                        Seller Information
                      </h4>
                    </strong>
                  </div>
                  <div className="d-flex w-50 table-responsive">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <th scope="row">Name</th>
                          <td>{this.state.product.sellerName}</td>
                        </tr>
                        <tr>
                          <th scope="row">Contact</th>
                          <td>{this.state.product.sellerContact}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Paper>
                <Paper
                  style={{
                    padding: "1rem",
                    marginRight: "3rem",
                    marginTop: "1rem",
                  }}
                >
                  <div className="d-flex">
                    <strong>
                      <h2 style={{ color: "rgb(255, 64, 0)" }}>Reviews</h2>
                    </strong>
                  </div>
                  {this.state.product ? (
                    this.state.product.reviews.map((review, index) => (
                      <div className="codepen-wrapper">
                        <figure className="review">
                          <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fuga doloremque architecto dicta animi, totam,
                            itaque officia ex.
                          </blockquote>
                          <figcaption className="review__person">
                            <img
                              src="http://alexsommers.com/codepen/user-6.jpg"
                              alt="User 1"
                              className="review__photo"
                            />
                            <div className="review__info">
                              <p className="review__info--name">Nikki Smith</p>
                              <p className="review__info--date">
                                {" "}
                                April 26, 2020
                              </p>
                            </div>
                            <div className="review__rating">7.8</div>
                          </figcaption>
                        </figure>
                      </div>
                    ))
                  ) : (
                    <p>No reviews</p>
                  )}
                </Paper>
              </div>
            </div>
          </Paper>
        </div>
        <Footerbar /> <Footer />
      </div>
    );
  }
}

export default Product;
