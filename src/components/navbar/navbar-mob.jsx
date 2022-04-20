/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

function NavbarMenu(props) {
  const { visibility } = props;
  return (
    <section className={"vs-menu-wrapper " + visibility}>
      <div className="vs-menu-area navbarmenu">
        <ul className="navbarmenu__nav">
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Home</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/about"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">About Us</span>
            </NavLink>
          </li>
          <li className="navbarmenu__item">
            <div className="navbarmenu__link">
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <a
                className="item"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                our services
              </a>
              <ul class="collapse" id="collapseExample">
                <li>
                  <NavLink className="navbarmenu__drowpmenue websolutions" to={"/websolutions"} exact>
                    Web Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarmenu__drowpmenue" to={".."} exact>
                    Mobile App
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarmenu__drowpmenue" to={".."} exact>
                    Hosting Servieces
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarmenu__drowpmenue" to={".."} exact>
                    Development
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="navbarmenu__item">
            <NavLink className="navbarmenu__link" to={"/contactus"} exact>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <span className="item">Contact us</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavbarMenu;
