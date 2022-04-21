import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';

function FooterMainpages( ) {
  return (
    <div className="footer__list">
      <h4 className="footer__list__header">MAIN PAGES</h4>
      <ul className="list">
        <li>
          <NavLink  to={"/evotech"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink  to={"/about"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/services"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Our Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contactus"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterMainpages;

