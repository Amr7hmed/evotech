import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function FooterCopyright() {
  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright__item">
          <div className="text">
            Copyright <a href="/">@ EvoTech</a> 2022
          </div>
          <div className="socialmedia">
            <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faGooglePlusSquare} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterCopyright;
