import { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {
  usePlacesAutocomplete,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      center: {
        lat: 28.7,
        lng: 77.1,
      },
      locationSavedDisabled: true,
    };
  }
  apikey = "AIzaSyB9-SxukO8pAFlR2YT7IBEeTwOZouOB4Js";
  mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  center = {
    lat: 28.7,
    lng: 77.1,
  };
  handleSave = () => {
    this.props.history.push("/profile");
  };
  componentDidMount() {
    const success = (position) => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    };
    const error = () => {
      console.log("Unable to retrieve your location");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <h3>Select your location</h3>
        <LoadScript googleMapsApiKey="AIzaSyB9-SxukO8pAFlR2YT7IBEeTwOZouOB4Js">
          <GoogleMap
            mapContainerStyle={this.mapContainerStyle}
            zoom={8}
            initialCenter={this.state.center}
            onClick={(event) => {
              let lt = event.latLng.lat();
              let ln = event.latLng.lng();
              this.setState({ lat: lt, lng: ln });
            }}
          >
            <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
          </GoogleMap>
        </LoadScript>
        <div className="m-5">
          <center>
            <button
              disabled={this.state.locationSavedDisabled}
              onClick={this.handleSave}
            >
              Save
            </button>
          </center>
        </div>
      </div>
    );
  }
}

export default MapComponent;
//AIzaSyB9-SxukO8pAFlR2YT7IBEeTwOZouOB4Js
