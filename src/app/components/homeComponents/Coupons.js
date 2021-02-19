import React, { useState } from "react";
import "../../Styles/Coupons.css";
const Coupons = () => {
  const [coupons, setCoupons] = useState({
    1: {
      title: "Coupon1",
      descriptionTitle: "Coupon Description Title",
      descriptionContent: "Coupon Description Content",
      img: "Coupon1.jpg",
    },
    2: {
      title: "Coupon2",
      descriptionTitle: "Coupon Description Title",
      descriptionContent: "Coupon Description Content",
      img: "Coupon2.jpg",
    },
  });
  return (
    <div className="row Coupons">
      <div className="col-md-6 card-tal">
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
              <h2 className="coupon-title">{coupons[1].title}</h2>
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
                <h5>{coupons[1].descriptionTitle}</h5>
                <p>{coupons[1].descriptionContent}</p>
              </div>
            </div>
            <div className="col-2 col-md-6"></div>
            <div className="col-10 col-md-6">
              <button
                className="btn mx-0 py-2 px-5"
                onClick={() => {
                  console.log(coupons[1].title);
                }}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 card-tal">
        <div className="container-fluid card-tal-con">
          <div className="row">
            <div className="col-6">
              <hr className="bg-white" />
            </div>{" "}
            <div className="col-6">
              <h2 className="coupon-title">{coupons[2].title}</h2>
            </div>
            <div className="col-md-6">
              <img
                className="p-"
                src="https://d1g4kfwzlre9gg.cloudfront.net/491x276/prod/images/77202070015.jpeg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="">
                <h5>{coupons[2].descriptionTitle}</h5>
                <p>{coupons[2].descriptionContent}</p>
              </div>
            </div>
            <div className="col-6"></div>
            <div className="col-6">
              <button
                className="btn  py-2 px-5"
                onClick={() => {
                  console.log(coupons[2].title);
                }}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
