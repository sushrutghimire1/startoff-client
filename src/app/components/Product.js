import React, { Component } from "react";
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
      productId: 1,
      productName: "product1",
      image: "img1.jpg",
      desp: "description of product",
      price: 100,
      sellerName: "seller1",
      sellerId: "1",
      sellerContact: "9841023456",
      stock: 100,
      rating: 5,
      reviews: [
        {
          reviewid: 1,
          userid: 1,
          username: "user",
          userimg: "img1.jpg",
          rating: 7.6,
          reviewDesp: "something something",
          reviewDate: "11/12/2021",
        },
        {
          reviewid: 2,
          userid: 2,
          username: "user2",
          userimg: "img1.jpg",
          rating: 3.6,
          reviewDesp: "something something",
          reviewDate: "11/12/2021",
        },
      ],
      offers: [
        {
          offerid: 1,
          offerDetails: "discount on this product now",
          expDate: "11/12/2025",
        },
        {
          offerid: 2,
          offerDetails: "this service available",
          expDate: "11/12/2025",
        },
      ],
    };
  }
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.product_id;
    this.setState({ productId: id });
    //fetch product details and update here.
  }

  render() {
    const Review = this.state.reviews.map((review, index) => (
      <div class="codepen-wrapper">
        <figure class="review">
          <blockquote class="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          <figcaption class="review__person">
            <img
              src="http://alexsommers.com/codepen/user-6.jpg"
              alt="User 1"
              class="review__photo"
            />
            <div class="review__info">
              <p class="review__info--name">Nikki Smith</p>
              <p class="review__info--date"> April 26, 2020</p>
            </div>
            <div class="review__rating">7.8</div>
          </figcaption>
        </figure>
      </div>
    ));
    return (
      <div className="product">
        <Navbar />
        <div className="container">
          <Paper className="m-3 p-2">
            <h1>{this.state.productName}</h1>
            <div className="row m-1">
              <div className="col-md-4 col-sm-12">
                <div className="productImage p-2">
                  <img
                    src={this.state.image}
                    class="img-fluid rounded mx-auto d-block"
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
                    label={this.state.rating}
                    className="px-3 mr-2"
                  />{" "}
                  {this.state.reviews.length} ratings
                </div>
                <div className="d-flex mb-3">
                  <h5>
                    <em>Rs</em>
                  </h5>
                  <h1>{this.state.price}</h1>
                </div>
                <div className="d-flex mb-3">
                  <div className="btn btn-info px-5">
                    <h5>
                      {this.state.stock > 0 ? this.state.stock : "No"} stock
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
                    {this.state.offers.map((offer, index) => (
                      <li>
                        <strong>{offer.expDate}</strong>-:{" "}
                        <em>{offer.offerDetails}</em>
                      </li>
                    ))}
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
                  <div className="d-flex w-50">{this.state.desp}</div>
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
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <th scope="row">Name</th>
                          <td>{this.state.sellerName}</td>
                        </tr>
                        <tr>
                          <th scope="row">Contact</th>
                          <td>{this.state.sellerContact}</td>
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
                  {Review}
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
