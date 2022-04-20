import React from "react";
import { NavLink } from "react-router-dom";
import BlogSlick from "../slick/blog_slick";

function SliderBlog() {
  return (
    <section className="sliderblog">
      <div className="container">
        <div className="sliderblog__latest">
          <div
            className="img"
            style={{
              backgroundImage: `url("./assets/images/blogs/home_blog.png")`,
            }}
          ></div>
          <div className="detiels">
            <h4>LATEST Blog</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .
            </p>
            <NavLink className="btn" to={"/blogs"} exact>All Blog</NavLink>
          </div>
        </div>
        <BlogSlick Styleclass="sliderblog__slick"/>
        <div className="sliderblog__moreblog">
          <NavLink to={"/blogs"} exact>
            More Blog
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default SliderBlog;
