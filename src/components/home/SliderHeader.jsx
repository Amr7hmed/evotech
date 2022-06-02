import React from "react";
import { NavLink } from "react-router-dom";

import Imgone from "../../images/bg/home_bg_one.jpg";
import Imgtwo from "../../images/bg/home_bg_two.png";
import Imgthree from "../../images/bg/home_bg_three.png";

function SliderHeader() {
  return (
    <section className="header__home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overload"></div>
            <img src={Imgone} className="d-block w-100" alt="Home Background" />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h1>Web Development</h1>
              <p>
                Programming and website development is one of the most
                productive methods that make your website an honorable interface
                for your company's business and services
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/contactus"} exact>
                  Join Us Now
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img src={Imgtwo} className="d-block w-100" alt="Home Background" />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Web Design (UI / UX)</h4>
              <p>
                Website design it saves the company time and money. And, it
                allows the company flexibility to communicate with
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgthree}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Web Management</h4>
              <p>
                It Makes necessary updates to content, images, and information
                about products or services. It also creates or deletes email or
                address data.
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgthree}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Domain & Hosting</h4>
              <p>
                Domain services and managed web hosting services help websites
                attract several customers in a short period.
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgthree}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Mobile Application</h4>
              <p>
                Mobile applications are the means to ensure that you can reach
                any customer anywhere.
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgthree}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>E-commerce Website</h4>
              <p>
                Online stores have become the most efficient electronic means of
                promoting any service or product.
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgthree}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Software Consulting</h4>
              <p>
                Determining the starting point is a measure of success for any
                company.
              </p>
              <div className="contaner_button">
                <NavLink className="btn" to={"/services"} exact>
                  Join us NOW
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderHeader;
