import React, { useState, useEffect } from "react";
import "../../Styles/Coupons.css";
const Coupons = (props) => {
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    setCoupons(props.coupon);
  });
  return (
    <div className="row Coupons">
      {coupons.map((coupon, index) => {
        return (
          <div className="col-md-6 card-tal" key={coupon.title}>
            <div className="container-fluid card-tal-con">
              <div className="row">
                <div className="col-6">
                  <hr
                    style={{
                      backgroundColor: "white",
                      borderTop: "2px solid rgb(255 255 255)",
                    }}
                  />
                </div>{" "}
                <div className="col-6">
                  <h2 className="coupon-title">{coupon.title}</h2>
                </div>
                <div className="col-md-6">
                  <img
                    className="p-"
                    src="https://d1g4kfwzlre9gg.cloudfront.net/491x276/prod/images/77202070015.jpeg"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="pt-2 pt-md-1">
                    <h5>{coupon.descriptionTitle}</h5>
                    <p>{coupons.descriptionContent}</p>
                  </div>
                </div>
                <div className="col-2 col-md-6"></div>
                <div className="col-10 col-md-6">
                  <button
                    className="btn mx-0 py-2 px-5"
                    onClick={() => {
                      console.log(coupon.title);
                    }}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coupons;
