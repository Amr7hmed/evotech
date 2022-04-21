import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';

function FooterServices( ) {
  return (
    <div className="footer__list">
      <h4 className="footer__list__header">Services</h4>
      <ul className="list">
        <li>
          <NavLink  to={"/websolutions"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Web Solutions</span>
          </NavLink>
        </li>
        <li>
          <NavLink  to={"/mobileapp"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Mobile App</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/hostingservieces"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Hosting Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/development"} exact>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Development</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterServices;

