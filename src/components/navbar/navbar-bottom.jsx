/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function NavbarBottom(props) {
  const { handelvisibility } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__bottom">
      <div className="container">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            src="./assets/images/logo/logo-header.png"
            alt="EvoTech logo"
            width={"270px"}
            height={"60px"}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handelvisibility}
        >
          <img
            src="./assets/images/icon/navmobile.png"
            alt="nav mobile icon"
            width={"60px"}
            height={"60px"}
          />
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                our services
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <NavLink className="dropdown-item" to={"/websolutions"} exact>
                    Web Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={".."} exact>
                    Mobile App
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={".."} exact>
                    Hosting Servieces
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={".."} exact>
                    Development
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/blogs"} exact>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contactus"} exact>
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn">GET PROPOSAL</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBottom;
