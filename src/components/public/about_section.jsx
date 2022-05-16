import React from "react";
import { NavLink } from "react-router-dom";

function AboutSection(props) {
  const { Styleclass, Image, Hidelink, Title, Styledetiles } = props;
  return (
    <section className="aboutsection">
      <div className="container">
        <div className="row aboutsection__items">
          <div className="col-md-12 col-xl-6">
            <div className="aboutsection__img">
              <img src={Image} alt="About Section Home" />
            </div>
          </div>
          <div className="col-md-12 col-xl-6">
            <div className="aboutsection__text">
              <p className={"link " + Hidelink}>About us</p>
              <h3>{Title}</h3>
              <div className={"detiles " + Styledetiles}>
                <p>
                  The most important thing that differentiates any company is
                  creating its own identity. We are working hard to keep pace
                  with developments in their field and ensure the quality of
                  service provided to our clients
                </p>
                <p>
                  That drives us to focus on the services we provide We are an
                  Evotechnology software development company. We provide
                  advanced solutions to help businesses enter the world of
                  digital transformation professionally and ensure they achieve
                  their goals.
                </p>
              </div>
              <div className={"aboutsection__button " + Styleclass}>
                <NavLink to={"/about"} className="btn" exact>
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
