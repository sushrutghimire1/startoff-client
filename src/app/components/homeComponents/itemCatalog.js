import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "../../Styles/itemCatalog.css";
import axios from "axios";

const ItemCatalog = (props) => {
  const [open, setOpen] = useState(false);
  const [cart, addCart] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddCart = (e) => {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    const itemValue = {
      productid: e.productId,
      productName: e.productName,
      price: e.price,
      userid: userid,
      seller: e.sellerId,
      desp: e.desp,
    };
    axios
      .post("http://localhost:4000/cart/addToCart", {
        productid: e.productId,
        productName: e.productName,
        price: e.price,
        userid: userid,
        seller: e.sellerId,
        desp: e.desp,
      })
      .then((res) => {
        console.log(res.data);
      });
    addCart([...cart, itemValue]);
  };
  useEffect(() => {
    setItem(props.item);
  });

  //use setItem for component.Mount
  const [item, setItem] = useState([]);

  //console.log(item);
  return (
    <div className="itemCatalog">
      <div className="row py-5">
        <div className="itemCatalog-title">
          <center>
            <h1 className="mb-3 section-head">TOP DEALS</h1>
          </center>
        </div>
        {item.map((item, index) => (
          <div className="col-lg-3" key={item.productId}>
            <div className="card product-card mx-auto">
              <div className="card-header text-center">
                <h1 className="product-title">{item.productName}</h1>
                <div className="row px-0 mt-3 text-center">
                  <div className="col-4 px-0">
                    <p className="price">Rs {item.price}</p>
                  </div>
                  <div className="col-4 px-0">
                    {/* <p className="rating">{item.discount}%</p> */}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <img
                  className="img-fluid float-center"
                  src="https://i.imgur.com/pft9N1v.png"
                  alt="product "
                />

                <div className="row px-0 mt-3 text-center">
                  <div className="col-6 px-0">
                    <p className="sold-amount">{item.stock} Products left</p>
                  </div>
                  <div className="col-6 px-0">
                    <div className="product-details-link">
                      <div onClick={handleClickOpen}>Product Details</div>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        fullWidth="lg"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Product Description"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            product description is mentioned here {item.desp}
                            <br />
                            <strong>Seller Details:</strong>
                            <br />
                            {item.sellerName}
                            <br />
                            {item.sellerContact}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleClose}
                            variant="outlined"
                            color="primary"
                          >
                            close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="row px-0">
                    <div className="col-6 px-0">
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                      >
                        <Link to="/cart">Checkout</Link>
                      </button>
                    </div>
                    <div className="col-6 px-0">
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          handleAddCart(item);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemCatalog;
