/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LogoFooterImage from "../../images/logo/logo-footer.png";

function FooterLogo() {
  return (
    <div className="footer__logo">
      <img
        src={LogoFooterImage}
        alt="EvoTech logo"
        width={"204px"}
        height={"137px"}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <a href="/"> EvoTech </a> ut labore et dolore magna aliqua.
      </p>
      <div className="socialmedia">
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" className="envelope">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default FooterLogo;
