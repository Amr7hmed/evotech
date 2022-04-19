import React from "react";

function SliderBlog() {
  return (
    <section className="sliderblog">
      <div className="container">
        <div className="sliderblog__latest">
          <div className="img">
            <img
              src="./assets/images/blogs/home_blog.png"
              alt="sliderblog latest"
            />
          </div>
          <div className="detiels">
            <h4>LATEST Blog</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .
            </p>
            <button className="btn">All Blog</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderBlog;
