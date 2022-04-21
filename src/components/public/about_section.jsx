import React from "react";
import {NavLink} from 'react-router-dom';

function AboutSection(props) {
  const { Styleclass,Image ,Hidelink,Title , Styledetiles} = props;
  return (
    <section className="aboutsection">
      <div className="container">
        <div className="row aboutsection__items">
          <div className="col-md-12 col-xl-6">
            <div className="aboutsection__img">
              <img
                src={Image}
                alt="About Section Home"
              />
            </div>
          </div>
          <div className="col-md-12 col-xl-6">
            <div className="aboutsection__text">
              <p className={"link "+Hidelink}>About us</p>
              <h3>{Title}</h3>
              <div className={"detiles "+Styledetiles}>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et
                </p>
              </div>
              <div className={"aboutsection__button "+ Styleclass}>
                <NavLink to={"/about"}  className="btn" exact>Read More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
