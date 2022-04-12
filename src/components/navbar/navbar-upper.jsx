import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

function NavbarUpper() {
  return (
    <nav className="navbar__upper">
      <div className="container">
        <div className="navbar__upper__item">
          <ul className="left">
            <li>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+2 40.993.7266</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>info@evotech.com</span>
            </li>
          </ul>
          <ul className="right">
            <li>
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </li>
            <li className="lan">
              <span>
              <img src="./assets/images/icon/langth.png" alt="langth" width={"28px"} height={"30px"} />
              <span className="text">Ar</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUpper;
