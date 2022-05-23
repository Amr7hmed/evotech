import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function FooterMainpages() {
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
    <div className="footer__list">
      <h4 className="footer__list__header">MAIN PAGES</h4>
      <ul className="list">
        <li>
          <NavLink to={"/evotech"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
            </span>
            <span className="item">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
            </span>
            <span className="item footer__link">About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/services"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
            </span>
            <span className="item">Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contactus"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
              <FontAwesomeIcon aria-hidden="true" icon={faChevronRight} />
            </span>
            <span className="item">Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterMainpages;
