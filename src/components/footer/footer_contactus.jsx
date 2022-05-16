import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function FooterContactus() {
  return (
    <div className="footer__contactus">
      <h4 className="footer__list__header">Contact Us</h4>
      <ul className="list">
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="text">
          10 floor, 53 Corniche El Maadi , Dar El Salam, Giza Governorate
          </span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text">Phone : 01017866060 / 01006037150</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faFax} />
          </span>
          <span className="text">
          FAX : +2 - 877 - 2341 - 1283
          </span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text">
          Email : info@evotech-co.com
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FooterContactus;
