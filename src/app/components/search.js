import React, { Component } from "react";
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
      searchResult: [
        {
          resultid: 1,
          id: 1,
          name: "prod1",
          price: 100,
          img: "img1.jpg",
          sellerId: 1,
          sellerName: "seller1",
          sellerContact: "9876541230",
          rating: 8,
        },
        {
          resultid: 2,
          id: 2,
          name: "prod2",
          price: 200,
          img: "img1.jpg",
          sellerId: 1,
          sellerName: "seller1",
          sellerContact: "9876541230",
          rating: 8,
        },
        {
          resultid: 3,
          id: 3,
          name: "prod3",
          price: 300,
          img: "img1.jpg",
          sellerId: 1,
          sellerName: "seller1",
          sellerContact: "9876541230",
          rating: 8,
        },
      ],
    };
  }
  componentDidMount() {
    let value = this.props.match.params.value;
    this.setState({ searchValue: value });
    //fetch details of result here.
  }
  usestyle = {
    width: "100%",
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="search container">
          {this.state.searchResult.map((item, index) => (
            <Typography style={this.usestyle} key={item.resultid}>
              <div
                className="my-3 p-3"
                style={{
                  background: "rgb(80, 205, 255)",
                  boxShadow: "2px 2px 7px 1px #1c6ea4",
                }}
              >
                <div className="row text-center">
                  <div className="col-md-3">{item.img}</div>
                  <div className="col-md-4">
                    <h1 style={{ color: "rgb(255, 64, 0)" }}>{item.name}</h1>
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
                    <div className="d-flex ">
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
