import React from "react";
import { NavLink } from "react-router-dom";

function HeaderPage(props) {
  const { Image ,Title} = props;
  return (
    <section
      className="headerpage"
      style={{
        backgroundImage: `url("${Image}")`,
      }}
    >
      <div className="overload"></div>
      <div className="container">
        <div className="headerpage__title">
          <div>
            <h4>{Title}</h4>
            <ul className="nav_list">
              <li>
                <NavLink to={"/"} className="nav_item" exact>
                  Home
                </NavLink>
              </li>
              {" "}/{" "}
              <li>
                <span>{Title}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderPage;
