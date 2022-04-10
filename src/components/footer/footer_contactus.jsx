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
            University Street, 128 Giza Square, Cairo 1367 Egypt
          </span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text">Phone : +2 - 877 - 3453 - 3726</span>
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
          Email : info@evotech.com
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FooterContactus;
