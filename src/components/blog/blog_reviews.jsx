import React from "react";
import BlogButtons from "../public/blogbuttons";
import BlogForm from "./blog_form";
import ReviewsCard from "./reviewscard";

import UserImage from "../../images/icon/user-tie.png";

function BlogReviews() {
  return (
    <section className="blog__review">
      <div className="container">
        <div className="blog__reviews">
          <BlogButtons ShareUrl={'https://www.pakkamarwadi.tk/'}/>
          <BlogForm/>
            <div className="blog__reviews__all">
              <div className="blog__reviews__cards">
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image={UserImage}
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image={UserImage}
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image={UserImage}
                  Name={"Name Surname"}
                />

              </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default BlogReviews;
