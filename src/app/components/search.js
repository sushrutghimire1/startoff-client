import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Footerbar from "./FooterBar";
import Footer from "./footer";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: [],
    };
  }
  componentDidMount() {
    let value = this.props.match.params.value;
    this.setState({ searchValue: value });
    //fetch details of result here.
    axios
      .get("http://localhost:4000/products/searchQuery/" + value)
      .then((res) => {
        this.setState({ searchResult: res.data });
      });
  }
  usestyle = {
    width: "100%",
    display: "inline-block",
    margin: "0 1rem 0.5rem 1rem",
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="search container">
          <center>
            <h3>
              <strong>Search Results for:</strong>
              &#160;&#160;
              {this.state.searchValue}
            </h3>
            <br />
          </center>

          {this.state.searchResult.map((item, index) => (
            <Typography
              style={this.usestyle}
              key={item.productId}
              onClick={() =>
                this.props.history.push("/product/" + item.productId)
              }
            >
              <div
                className="my-1"
                style={{
                  background: "rgb(80, 205, 255)",
                  boxShadow: "2px 2px 7px 1px #1c6ea4",
                  padding: "3rem 0 1rem 1rem",
                }}
              >
                <div className="row text-center">
                  <div className="col-md-3">{item.image}</div>
                  <div className="col-md-4">
                    <h1 style={{ color: "rgb(255, 64, 0)" }}>
                      {item.productName}
                    </h1>
                    <br />
                    Rating:{" "}
                    <Chip
                      label={item.rating}
                      className="px-2"
                      color="primary"
                      clickable
                    />
                  </div>
                  <div className="col-md-2">
                    <h3>Rs. {item.price}</h3>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex pr-3">
                      <table class="table table-hover">
                        <tbody>
                          <tr>
                            <th scope="row">Name</th>
                            <td>{item.sellerName}</td>
                          </tr>
                          <tr>
                            <th scope="row">Contact</th>
                            <td>{item.sellerContact}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          ))}
        </div>
        <Footerbar />
        <Footer />
      </div>
    );
  }
}

export default Search;
