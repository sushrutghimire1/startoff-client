import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
import NavbarDropdown from "./NavbarDropdown";
import "../Styles/navigationbar.css";

const Navbar = (props) => {
  const [search, setSearch] = useState();
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className="navigationbar">
      <nav className="navbar navbar-expand-sm px-1 py-2">
        <div>
          <NavLink className="navbar-brand mx-5" to="/home">
            <span className="display-6">Start Off</span>
          </NavLink>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-right w-50">
            <input className="form-control" onChange={searchChangeHandler} />
            <button className="btn btn-outline-info" onClick={searchHandler}>
              Search
            </button>
          </div>
          <div className="w-25"></div>
          <ul className="navbar-nav me-auto px-5">
            <li className="nav-item px-2">
              <NavLink to="/orders" className="nav-link">
                Orders
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="" to="/cart">
                <i className="fas fa-shopping-cart fa-2x"></i>
              </NavLink>
            </li>
          </ul>
          <NavbarDropdown />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
