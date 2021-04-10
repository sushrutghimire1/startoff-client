import React, { Component } from "react";
import axios from "axios";
// import UserInfoService from "../../services/UserInfoService";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: {},
    };
  }
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;

    axios
      .get("http://localhost:4000/profile/userinfo/" + userid)
      .then((res) => {
        this.setState({ res: res.data });
      });
    // fetch("http://localhost:4000/profile/userinfo")
    //   .then((res) => (res = res.json()))
    //   .then((res) => {
    //     this.setState({ res });
    //     console.log(res);
    //     console.log(this.state);
    //     console.log(this.state.res.FirstName);
    //   });
  }
  useStyles = {
    root: {
      flexGrow: 1,
    },
    paper: {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      textAlign: "center",
      color: "rgb(255, 98, 0)",
    },
  };

  render() {
    return (
      <div className="Profile m-3">
        <div className="row mb-3">
          <h1>Personal Information</h1>
        </div>
        <Divider variant="middle" />
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}></Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="FirstName"
                  label={this.state.res.FirstName}
                  value={this.state.res.FirstName}
                  onChange={(e) => {
                    this.setState({ res: { FirstName: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="LastName"
                  label={this.state.res.LastName}
                  value={this.state.res.LastName}
                  onChange={(e) => {
                    this.setState({ res: { LastName: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Mobile"
                  label={this.state.res.Mobile}
                  value={this.state.res.Mobile}
                  onChange={(e) => {
                    this.setState({ res: { Mobile: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Username"
                  label={this.state.res.Username}
                  value={this.state.res.Username}
                  onChange={(e) => {
                    this.setState({ res: { Username: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Email"
                  label={this.state.res.Email}
                  value={this.state.res.Email}
                  onChange={(e) => {
                    this.setState({ res: { Email: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="DoB"
                  label={this.state.res.DoB}
                  value={this.state.res.DoB}
                  onChange={(e) => {
                    this.setState({ res: { DoB: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="City"
                  label={this.state.res.City}
                  value={this.state.res.City}
                  onChange={(e) => {
                    this.setState({ res: { City: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Country"
                  label={this.state.res.Country}
                  value={this.state.res.Country}
                  onChange={(e) => {
                    this.setState({ res: { Country: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="PinCode"
                  label={this.state.res.PinCode}
                  value={this.state.res.PinCode}
                  onChange={(e) => {
                    this.setState({ res: { PinCode: e.target.value } });
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Profile;
