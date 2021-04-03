import React, { Component } from "react";
import GoogleMaps from "./GoogleMaps";
class mapComponent extends Component {
  constructor(props) {
    super(props);
    let url = this.props.match.params.value;
    this.state = {
      lat: url.split("-")[0],
      lng: url.split("-")[1],
      url: url,
    };
  }

  render() {
    return (
      <div className="mapComponent">
        <h3>
          Select your location
          <button
            className="btn btn-info mx-5"
            onClick={() => {
              this.props.history.push("../profile");
            }}
          >
            Save
          </button>
        </h3>
        <GoogleMaps lat={this.state.lat} lng={this.state.lng} />
        {console.log(this.state)}
      </div>
    );
  }
}

export default mapComponent;
