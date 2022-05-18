/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

function NavbarMenu(props) {
  const { visibility, hidevisibility } = props;
  return (
    <section className={"vs-menu-wrapper " + visibility}>
      <div className="vs-menu-area navbarmenu">
        <ul className="navbarmenu__nav">
          <li className="navbarmenu__item">
            <NavLink
              className="navbarmenu__link"
              to={"/evotech"}
              exact
              onClick={hidevisibility}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Home</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink
              className="navbarmenu__link"
              to={"/about"}
              exact
              onClick={hidevisibility}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">About Us</span>
            </NavLink>
          </li>

          <li className="navbarmenu__item">
            <NavLink
              className="navbarmenu__link"
              to={"/services"}
              exact
              onClick={hidevisibility}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Services</span>
            </NavLink>
          </li>

          {/*
          <li className="navbarmenu__item">
            <NavLink
              className="navbarmenu__link"
              to={"/blogs"}
              exact
              onClick={hidevisibility}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">
              Blogs</span>
            </NavLink>
          </li>
          
          */}

          <li className="navbarmenu__item">
            <NavLink
              className="navbarmenu__link"
              to={"/contactus"}
              exact
              onClick={hidevisibility}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Contact us</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavbarMenu;
