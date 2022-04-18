import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BlogButtons from "../public/blogbuttons";
import ReviewsCard from "./reviewscard";

function BlogReviews() {
  return (
    <section className="blog__review">
      <div className="container">
        <div className="blog__reviews">
          <BlogButtons />
          <div className="blog__reviews__row">
            <div className="blog__reviews__all">
              <div className="header">
                <h5>Reviews (80 )</h5>
                <button className="btn">WRITE REVIEW</button>
              </div>

              <div className="average">
                <FontAwesomeIcon icon={faStar} />
                <span className="number">
                  <span>3</span> / 5
                </span>
                <span className="text">Average Rating</span>
              </div>

              <div className="blog__reviews__cards">
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"stylereviews"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />

                <div className="viewall">
                    <a href="#">
                    View All
                    </a>
                </div>
              </div>
            </div>

            <div className="blog__reviews__top">
                <h5></h5>
                <div className="blog__reviews__cards">
                <ReviewsCard
                  Styleclass={"styletop"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"styletop"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />
                <ReviewsCard
                  Styleclass={"styletop"}
                  Image="./assets/images/icon/user-tie.png"
                  Name={"Name Surname"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogReviews;
