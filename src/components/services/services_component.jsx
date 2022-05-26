import React from "react";
import { NavLink } from "react-router-dom";
function ServicesComponent(props) {
  const { Title,Image ,styleclass,description} = props;
  return (
    <section className="services__component">
      <div className="container">
        <div className={"row " + styleclass}>
          <div className="img_contener col-md-12 col-xl-5">
            <div className="img">
            <img src={Image} alt="web design" />
            </div>
          </div>
          <div className="document col-md-12 col-xl-7">
            <div className="title">
              <h3>{Title}</h3>
            </div>
            <p>{description}
            </p>
            <div className="button">
              <NavLink className="btn" to={"/contactus"} exact>
              Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
