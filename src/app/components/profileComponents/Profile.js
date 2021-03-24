import React, { Component } from "react";
import UserInfoService from "../../services/UserInfoService";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "Naman",
      Username: "duttanaman1s",
      LastName: "Dutta",
      Email: "duttanaman1@gmail.com",
      Mobile: "7339210265",
      DoB: "18/11/1999",
      City: "Kathmandu",
      Country: "City",
    };
  }
  // componentDidMount(){
  //     //fetch detiails.
  // }
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
  componentDidUpdate() {}
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
                  label="First Name"
                  defaultValue={this.state.FirstName}
                  onChange={(e) => {
                    this.setState({ FirstName: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="LastName"
                  label="Last Name"
                  defaultValue={this.state.LastName}
                  onChange={(e) => {
                    this.setState({ LastName: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Mobile"
                  label="Mobile"
                  defaultValue={this.state.Mobile}
                  onChange={(e) => {
                    this.setState({ Mobile: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Username"
                  label="Username"
                  defaultValue={this.state.Username}
                  onChange={(e) => {
                    this.setState({ Username: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Email"
                  label="Email"
                  defaultValue={this.state.Email}
                  onChange={(e) => {
                    this.setState({ Email: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="DoB"
                  label="DoB"
                  defaultValue={this.state.DoB}
                  onChange={(e) => {
                    this.setState({ DoB: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="City"
                  label="City"
                  defaultValue={this.state.City}
                  onChange={(e) => {
                    this.setState({ City: e.target.value });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper style={this.useStyles.paper}>
                <TextField
                  id="Country"
                  label="Country"
                  defaultValue={this.state.Country}
                  onChange={(e) => {
                    this.setState({ Country: e.target.value });
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
