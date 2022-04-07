import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function FooterList( {title}) {
  return (
    <div className="footer__list">
      <h4 className="footer__list__header">{title}</h4>
      <ul className="list">
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">About Us</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Our Services</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Contact Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterList;

/*


*/