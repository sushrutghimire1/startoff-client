import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "Naman",
      Username: "ReactJS: EditableText",
      LastName: "Dutta",
      Email: "duttanaman1@gmail.com",
      Mobile: "7339210265",
      DoB: "18/11/1999",
      Password: "naman",
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
  render() {
    return (
      <div className="Profile">
        <div className="row mb-3">
          <h1>Personal Information</h1>
        </div>
        <Divider variant="middle" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper style={this.useStyles.paper}>
              <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper style={this.useStyles.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
