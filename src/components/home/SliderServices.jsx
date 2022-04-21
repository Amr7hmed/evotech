import React from "react";
import ServicesSlick from "../slick/services_slick";

function SliderServices() {
  return (
    <section className="slider__services">
      <div className="overload"></div>
      <div className="container">
        <div className="slider__services__titleback">Services</div>
        <div className="slider__services__header">
          <h3>Our Services</h3>
          <p className="title">MAKE WISHES IT TRUE</p>

          <div className="detiles">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </div>
        </div>
        <ServicesSlick />
      </div>
    </section>
  );
}

export default SliderServices;
