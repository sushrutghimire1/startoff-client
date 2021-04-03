import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AuthenticationService from "../services/AuthenticationService";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const NavSignUp = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [login, setLogin] = useState("guest");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const [user, setUser] = useState({ props });

  axios.get("http://localhost:4000/home/loginInfo").then((res) => {
    setLogin(res.data.email);
  });

  return (
    <div className="mr-5">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="nav-link"
            size="sm"
            direction="left"
          >
            <DropdownToggle caret>
              <i className="fas fa-user fa-2x"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{login}</DropdownItem>
              <DropdownItem>
                <NavLink to={"/home"} className="nav-link">
                  <i className="fas fa-user-cog"></i> Home
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to={"/profile"} className="nav-link">
                  <i className="fas fa-id-card"></i> Profile
                </NavLink>
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem>
                <NavLink
                  to="/SignOut"
                  className="nav-link bg-danger btn text-light"
                >
                  Sign Out
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default NavSignUp;
