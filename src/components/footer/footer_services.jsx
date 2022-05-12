import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';

function FooterServices( ) {
  
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
      <h4 className="footer__list__header">Services</h4>
      <ul className="list">
        <li>
          <NavLink  to={"/websolutions"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Web Solutions</span>
          </NavLink>
        </li>
        <li>
          <NavLink  to={"/mobileapp"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Mobile App</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/hostingservieces"} exact onClick={scrollToTop}>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Hosting Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/development"} exact onClick={scrollToTop}>
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

