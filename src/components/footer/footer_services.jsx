import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function FooterServices( ) {
  

  return (
    <div className="footer__list">
      <h4 className="footer__list__header">Services</h4>
      <ul className="list">
        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Web Development</span>
        </li>

        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Web Design (UI / UX)</span>
        </li>


        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Web Management</span>
        </li>

        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Domain & Hosting</span>
        </li>


        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Mobile Application</span>
        </li>

        
        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">E-Commerce Website</span>
        </li>


        <li>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className="item">Software Consulting</span>
        </li>

      </ul>
    </div>
  );
}

export default FooterServices;

