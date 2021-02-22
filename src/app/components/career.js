import React, { Component } from "react";
import SignUp from "../auth/SignUp";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  clickHandler = () => {
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div className="career">
        <div className="container my-5 bg-light">
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
          Few words describing about career in our application
          <br />
        </div>
        <center>
          <button className="btn btn-info" onClick={this.clickHandler}>
            Sign Up
          </button>
        </center>
      </div>
    );
  }
}

export default Career;
