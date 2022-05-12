/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LogoFooterImage from "../../images/logo/logo-footer.png";
import { NavLink } from "react-router-dom";

function FooterLogo() {

  const [isVisible, setIsVisible] = useState(false);
   // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
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
        <NavLink to={"/evotech"} exact onClick={scrollToTop}>
          EvoTech
        </NavLink>{" "}
        ut labore et dolore magna aliqua.
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
