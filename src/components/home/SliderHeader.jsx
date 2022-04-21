import React from "react";
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overload"></div>
            <img
              src={Imgone}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h1>Web Solutions</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </p>
              <div className="contaner_button">
                <button className="btn">Join us NOW</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="overload"></div>
            <img
              src={Imgtwo}
              className="d-block w-100"
              alt="Home Background"
            />

            <div className="contaner_item">
              <p>Evolution Technology</p>
              <h4>Web Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </p>
              <div className="contaner_button">
                <button className="btn">Join us NOW</button>
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
              <h4>Web Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </p>
              <div className="contaner_button">
                <button className="btn">Join us NOW</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderHeader;
