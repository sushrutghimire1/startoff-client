import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Slider from "@material-ui/core/Slider";
import OrderRating from "./orderRating";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";
import axios from "axios";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      userid: "",
      newfeedback: "",
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
  ratingsMarks = [
    {
      label: 0,
      value: 0,
    },
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
      label: 4,
      value: 4,
    },
    {
      label: 5,
      value: 5,
    },
  ];
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    this.setState({ userid: userid });
    axios.get("http://localhost:4000/orders/consumer/" + userid).then((res) => {
      this.setState({ order: res.data });
    });
  }
  handleRatingChange(orderId, rating) {
    var userid = this.state.userid;

    axios
      .post("http://localhost:4000/orders/consumer/rating", {
        userid: userid,
        orderId: orderId,
        rating: rating,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  feedbackChangeHandler = (e) => {
    var val = e.target.value;
    this.setState({ newfeedback: val });
  };
  feedbackPostHandler = (orderid) => {
    var userid = this.state.userid;
    var newfeedback = this.state.newfeedback;
    axios
      .post("http://localhost:4000/orders/consumer/feedback", {
        userid: userid,
        newfeedback: newfeedback,
        orderid: orderid,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
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
            <div style={{ width: 300 }}>
              <Typography id="discrete-slider-small-steps" gutterBottom>
                Ratings
              </Typography>
              <Slider
                defaultValue={items.rating}
                ariaValueText={this.ratingsMarks.value}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks
                min={0}
                max={5}
                name={this.ratingsMarks.value}
                type="number"
                valueLabelDisplay="auto"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                marks={this.ratingsMarks}
                onChange={(e, newValue) => {
                  this.setState({});
                  this.handleRatingChange(items.orderId, newValue);
                }}
              />
            </div>
            <div style={{ width: 800, marginLeft: 20 }}>
              <div className="form-group mx-5 px-5">
                <label for="exampleFormControlTextarea1">Your Feedback</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={this.feedbackChangeHandler}
                ></textarea>
                <button
                  disabled={this.state.newfeedback.length > 0 ? false : true}
                  className="btn btn-info px-5 mt-3"
                  onClick={() => {
                    this.feedbackPostHandler(items.orderId);
                  }}
                >
                  {" "}
                  Save
                </button>
              </div>
            </div>
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
