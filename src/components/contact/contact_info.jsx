import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function ContactInfo() {
  return (
    <section className="contact__info">
      <div className="left">
        <h4>Contact Info</h4>
        <ul className="list">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className="text">
              University Street, 128 Giza Square,
              <br /> Cairo 1367 Egypt
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
            <span className="text">FAX : +2 - 877 - 2341 - 1283</span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="text">Email : info@evotech.com</span>
          </li>
        </ul>
        <div className="socialmedia">
          <a
            href="https://www.facebook.com/Evotech-Software-company-108686995082581/?ref=pages_you_manage"
            target={"_blank;"}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=/evotechsoftware/"
            target={"_blank;"}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/evotechco-software-company/"
            target={"_blank;"}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCRa9DRXFiQ6qmku6nYUqsLg"
            target={"_blank;"}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.8899193557255!2d31.229926528261174!3d29.98761277386355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584789cc2bdd83%3A0x14d84ce00227713!2sOngoing!5e0!3m2!1sar!2seg!4v1650356669800!5m2!1sar!2seg"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactInfo;
