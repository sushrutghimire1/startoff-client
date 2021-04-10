import React from "react";
import { Component } from "react";
import Paper from "@material-ui/core/Paper";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  render() {
    return (
      <Paper
        style={{
          padding: "1rem",
          marginRight: "3rem",
          marginTop: "1rem",
        }}
      >
        <div className="d-flex">
          <strong>
            <h2 style={{ color: "rgb(255, 64, 0)" }}>Reviews</h2>
          </strong>
        </div>
        {this.state.product.reviews.map((review, index) => (
          <div class="codepen-wrapper">
            <figure class="review">
              <blockquote class="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption class="review__person">
                <img
                  src="http://alexsommers.com/codepen/user-6.jpg"
                  alt="User 1"
                  class="review__photo"
                />
                <div class="review__info">
                  <p class="review__info--name">Nikki Smith</p>
                  <p class="review__info--date"> April 26, 2020</p>
                </div>
                <div class="review__rating">7.8</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </Paper>
    );
  }
}

export default Feedback;
