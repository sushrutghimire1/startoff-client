import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        {
          orderId: 1,
          productId: 1,
          productName: "product1",
          image: "img1.jpg",
          quantity: 1,
          seller: "seller1",
          total: 100,
          status: "delivered",
          statusDate: "10/11/2021",
          rating: 5,
          feedback: "",
        },
        {
          orderId: 2,
          productId: 2,
          productName: "product2",
          image: "img2.jpg",
          quantity: 2,
          seller: "seller2",
          total: 200,
          status: "shipping",
          statusDate: "08/11/2021",
          rating: 5,
          feedback: "",
        },
        {
          orderId: 3,
          productId: 3,
          productName: "product3",
          image: "img3.jpg",
          quantity: 3,
          seller: "seller3",
          total: 300,
          status: "ordered",
          statusDate: "03/11/2021",
          rating: 5,
          feedback: "",
        },
        {
          orderId: 4,
          productId: 4,
          productName: "product4",
          image: "img4.jpg",
          quantity: 4,
          seller: "seller4",
          total: 400,
          status: "canceled",
          statusDate: "03/11/2021",
          rating: 5,
          feedback: "",
        },
      ],
    };
  }
  status(e) {
    if (e === "delivered") {
      return (
        <button className="btn btn-success">
          <h3>{e}</h3>
        </button>
      );
    } else if (e === "shipping") {
      return (
        <button className="btn btn-warning">
          <h3>{e}</h3>
        </button>
      );
    } else if (e === "ordered") {
      return (
        <button className="btn btn-info">
          <h3>{e}</h3>
        </button>
      );
    } else if (e === "canceled") {
      return (
        <button className="btn btn-danger">
          <h3>{e}</h3>
        </button>
      );
    }
  }
  usestyle = {
    width: "100%",
  };
  render() {
    return (
      <div className="Orders bg-light">
        <Navbar />
        <div className="container ">
          {this.state.order.map((items, index) => (
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id={items.orderId}
              >
                <Typography style={this.usestyle}>
                  <div
                    className="my-3 p-3"
                    style={{
                      background: "rgb(80, 205, 255)",
                      boxShadow: "2px 2px 7px 1px #1c6ea4",
                    }}
                    key={items.orderId}
                  >
                    <strong>Order ID: {items.orderId}</strong>
                    <div className="row text-center">
                      <div className="col-md-2">{items.image}</div>
                      <div className="col-md-4">
                        <h1 style={{ color: "rgb(255, 64, 0)" }}>
                          {items.productName}
                        </h1>
                        Quantity: {items.quantity}
                        <br />
                        Seller: {items.seller}
                      </div>
                      <div className="col-md-2">
                        <h3>Rs. {items.total}</h3>
                      </div>
                      <div className="col-md-4">
                        {this.status(items.status)}
                        <br />
                        {items.statusDate}
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  review system star giving system, a feedback input text
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default Orders;
