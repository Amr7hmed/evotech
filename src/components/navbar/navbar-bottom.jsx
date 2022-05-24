/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Imagelogo from "../../images/logo/logo-header.svg";
import Imagenavmob from "../../images/icon/navmobile.png";

function NavbarBottom(props) {
  const { handelvisibility } = props;

  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__bottom">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/evotech"
          exact
          onClick={scrollToTop}
        >
          <img
            src={Imagelogo}
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
            src={Imagenavmob}
            alt="nav mobile icon"
            width={"60px"}
            height={"60px"}
          />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"/evotech"}
                exact
                onClick={scrollToTop}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/about"}
                exact
                onClick={scrollToTop}
              >
                About Us
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/services"}
                exact
                onClick={scrollToTop}
              >
                Services
              </NavLink>
            </li>
{/*

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/blogs"}
                exact
                onClick={scrollToTop}
              >
                Blogs
              </NavLink>
            </li>
*/}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/contactus"}
                exact
                onClick={scrollToTop}
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn"
                to={"/contactus"}
                exact
                onClick={scrollToTop}
              >
                GET PROPOSAL
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBottom;
