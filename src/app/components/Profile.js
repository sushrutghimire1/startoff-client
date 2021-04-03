import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";
import Navfooter from "./footer";
import Profile from "./profileComponents/Profile";
import Orders from "./profileComponents/Orders";
import Address from "./profileComponents/Address";
// import Feedback from "./profileComponents/Feedback";
import Gift from "./profileComponents/Gift";
import Faq from "./profileComponents/Faq";
import "../Styles/ProfileConsum.css";

class ProfileConsum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "profile",
      address: [],
      loading: true,
    };
  }

  handleClick = (e) => {
    this.setState({
      page: e,
    });
  };

  Sidebar = () => {
    return (
      <ListGroup>
        <ListGroupItem
          onClick={() => {
            this.handleClick("orders");
          }}
        >
          My Orders
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("profile");
          }}
        >
          Profile Information
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("address");
          }}
        >
          Manage Address
        </ListGroupItem>
        {/* <ListGroupItem
          onClick={() => {
            this.handleClick("feedback");
          }}
        >
          Feedbacks and Insights
        </ListGroupItem> */}
        <ListGroupItem
          onClick={() => {
            this.handleClick("gift");
          }}
        >
          Gift Coupons
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("faq");
          }}
        >
          FAQs
        </ListGroupItem>
      </ListGroup>
    );
  };
  componentDidMount() {
    // fetch("http://localhost:4000/profile/address")
    //   .then((res) => {
    //     res = res.json();
    //   })
    //   .then((res) => {
    //     this.setState({ address: res, loading: false });
    //   });
    axios.get("http://localhost:4000/profile/address").then((res) => {
      console.log(res.data.address);
      this.setState({ address: res.data.address, loading: false });
    });
  }
  page = () => {
    if (this.state.page === "profile") {
      return <Profile />;
    } else if (this.state.page === "orders") {
      return <Orders />;
    } else if (this.state.page === "address") {
      return <Address address={this.state.address} />;
      // } else if (this.state.page === "feedback") {
      //   return <Feedback />;
    } else if (this.state.page === "gift") {
      return <Gift />;
    } else if (this.state.page === "faq") {
      return <Faq />;
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="ProfileConsum my-3">
          <div className="row">
            <div className="col-md-3">{this.Sidebar()}</div>
            <div className="col-md-9">{this.page()}</div>
          </div>
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default ProfileConsum;
