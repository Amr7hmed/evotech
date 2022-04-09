/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink} from 'react-router-dom';

function NavbarBottom(props) {
  const {handelvisibility}=props;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__bottom">
      <div className="container">
        <NavLink className="navbar-brand" to="/" exact>
          <img src="./assets/images/logo/logo-header.png" alt="EvoTech logo"  width={"270px"} height={"60px"} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handelvisibility}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/"} exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"} exact>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/services"} exact>
                our services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contactus"} exact>
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">AR</div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBottom;
