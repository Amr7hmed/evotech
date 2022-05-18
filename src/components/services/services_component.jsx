import React from "react";
import { NavLink } from "react-router-dom";
function ServicesComponent(props) {
  const { Title,Image ,styleclass} = props;
  return (
    <section className="services__component">
      <div className="container">
        <div className={"row " + styleclass}>
          <div className="img col-md-12 col-xl-5">
            <img src={Image} alt="web design" />
          </div>
          <div className="document col-md-12 col-xl-7">
            <div className="title">
              <h3>{Title}</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ad eveniet eaque optio dolores voluptatum quis
              reprehenderit nemo dolor soluta porro fugiat perspiciatis
              asperiores unde dolorum pariatur laudantium, excepturi ipsam
              veniam possimus. Veritatis eius reprehenderit laboriosam
              reiciendis optio inventore velit culpa? Nulla minus commodi
              laudantium numquam
            </p>
            <div className="button">
              <NavLink className="btn" to={"/contactus"} exact>
                Contact us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
