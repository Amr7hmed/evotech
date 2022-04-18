import React from "react";
import { NavLink } from "react-router-dom";
import BlogButtons from "../public/blogbuttons";

function BlogsCard(props) {
  const { img, Category, Title } = props;

  return (
    <div className="blogs__card" >
      <div className="blogs__card__img" style={{
          backgroundImage: `url('${img}')`,
        }}>
        <div className="category">{Category}</div>
      </div>

      <div className="blogs__card__data">
        <div className="blog__detiles">
          <div className="header">
            <span className="edite">
              26/06/2017, POSTED BY <span>KHALID SAIED</span>
            </span>
            <h6>{Title}</h6>
          </div>

          <div className="blog_data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </div>

        <div className="read">
          <NavLink className="btn" to={"/blog"} exact> Read More</NavLink>
        </div>
        <BlogButtons/>
      </div>
    </div>
  );
}

export default BlogsCard;
