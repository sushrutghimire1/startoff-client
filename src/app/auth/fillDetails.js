import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import "../Styles/signIn.css";

import Authentication from "../services/AuthenticationService";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      dob: "",
      city: "",
      country: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //call service here
    this.props.history.push("/home");
  };
  changeHandler = (e) => {
    switch (e.target.name) {
      case "username":
        this.setState({
          username: e.target.value,
        });
        break;
      case "country":
        this.setState({
          country: e.target.value,
        });
        break;
      case "password":
        this.setState({
          password: e.target.value,
        });
        break;
      case "repassword":
        this.setState({
          repassword: e.target.value,
        });
        break;
      case "phone":
        this.setState({
          phone: e.target.value,
        });
        break;
      case "dob":
        this.setState({
          dob: e.target.value,
        });
        break;
      case "city":
        this.setState({
          city: e.target.value,
        });
        break;
      case "role":
        this.setState({
          role: e.target.value,
        });
        break;
      case "email":
        this.setState({
          email: e.target.value,
        });
        break;
      case "check":
        this.setState({
          check: !this.state.check,
        });
        break;
      default:
        break;
    }
  };
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signIn">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-2 col-md-1 col-sm-2">
              <nav className="navbar ">
                <div onClick={this.props.history.goBack} className="back">
                  <i className="fas fa-arrow-circle-left fa-3x"></i>
                </div>
              </nav>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-8 px-5 pt-2 login-box">
              <div className="row">
                <div className="col login-title">
                  <i className="fa fa-user-circle fa-2x"></i> <br />
                  SIGNUP
                </div>
              </div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  {/* form starting here */}
                  <form className="row m-2 px-5" onSubmit={this.handleSubmit}>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">EMAIL</span>
                      </label>
                      <input
                        type="email"
                        className="username form-control "
                        name="email"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">PHONE</span>
                      </label>
                      <input
                        type="tel"
                        className="username form-control "
                        name="phone"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">Date of Birth</span>
                      </label>
                      <input
                        type="date"
                        className="username form-control "
                        name="dob"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">CITY</span>
                      </label>
                      <input
                        type="text"
                        className="username form-control "
                        name="city"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">COUNTRY</span>
                      </label>
                      <input
                        type="text"
                        className="username form-control "
                        name="country"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <center>
                        <input
                          type="submit"
                          value="Confirm"
                          className="btn btn-success align-self-center form-control"
                        />
                      </center>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
