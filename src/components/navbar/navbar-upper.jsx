import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import Imagelogo from "../../images/icon/langth.png";

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
              <span>01017866060 / 01006037150</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>info@evotech-co.com</span>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href="https://www.facebook.com/Evotech-Software-company-108686995082581/?ref=pages_you_manage" target={"_blank;"}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCRa9DRXFiQ6qmku6nYUqsLg" target={"_blank;"}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/evotechco-software-company/" target={"_blank;"}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/?next=/evotechsoftware/" target={"_blank;"}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            {/*
            <li className="lan">
              <span>
              <img src={Imagelogo} alt="langth" width={"28px"} height={"30px"} />
              <span className="text">Ar</span>
              </span>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUpper;
