/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {NavLink} from 'react-router-dom';

function NavbarMenu(props) {
  const { visibility, handelvisibility } = props;
  return (
    <section className={"vs-menu-wrapper " + visibility}>
      <div className="vs-menu-area navbarmenu">
        <button type="button" className="btn close__div"
          onClick={handelvisibility}>
          <span className="close__icon">
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </button>
        <ul className="navbarmenu__nav">
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link active" to={"/"} exact>
              Home
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/about"} exact>
              About Us
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/services"} exact>
              our services
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/contactus"} exact>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavbarMenu;
