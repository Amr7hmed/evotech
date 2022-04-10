/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

function FooterLogo() {
  return (
    <div className="footer__logo">
      <img src="./assets/images/logo/logo-footer.png" alt="EvoTech logo" width={"204px"} height={"137px"}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod <a href="/"> EvoTech </a> ut labore et dolore magna aliqua.
      </p>
      <div className="socialmedia">
            <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
      </div>
    </div>
  );
}

export default FooterLogo;
