/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

function NavbarMenu(props) {
  const { visibility, handelvisibility } = props;
  return (
    <section className={"vs-menu-wrapper " + visibility}>
      <div className="vs-menu-area navbarmenu">
        <button
          type="button"
          className="btn close__div"
          onClick={handelvisibility}
        >
          <span className="close__icon">
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </button>
        <ul className="navbarmenu__nav">
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Home</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/about"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">About Us</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/services"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">our services</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/contactus"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight}/>
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
