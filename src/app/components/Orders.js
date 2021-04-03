import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import OrderRating from "./orderRating";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";
import axios from "axios";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
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
  // componentDidMount() {
  //   fetch("http://localhost:4000/orders/consumer")
  //     .then((res) => {
  //       res = res.json();
  //     })
  //     .then((res) => {
  //       this.setState({ res });
  //     })
  //     .catch((error) => console.error(error));
  // }
  // async componentDidMount() {
  //   const url = "http://localhost:4000/orders/consumer";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ data });
  // }
  componentDidMount() {
    axios.get("http://localhost:4000/orders/consumer/1").then((res) => {
      this.setState({ order: res.data });
      console.log(res.data.order);
    });
  }
  orders = () => {
    return <h1>No Orders</h1>;
  };
  displayorders = () => {
    if (this.state.order.length > 0) {
      return this.state.order.map((items, index) => (
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id={items.orderId}>
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
              <OrderRating productId="" userId="" />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ));
    } else {
      return <h1>No orders yet</h1>;
    }
  };

  render() {
    return (
      <div className="Orders bg-light">
        <Navbar />
        <div className="container ">{this.displayorders()}</div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default Orders;
