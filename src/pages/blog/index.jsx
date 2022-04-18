import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderPage from "../../components/public/HeaderPage.jsx";
import BlogCard from "../../components/blog/blog_card.jsx";
import BlogReviews from "../../components/blog/blog_reviews.jsx";
import BlogSlick from "../../components/slick/blog_slick.jsx";

function Blog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Blog </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <HeaderPage
          Image="./assets/images/bg/blog_header.jpg"
          Title="Blog Title"
        />

        <div className="container">
          <BlogCard
            Title={"Blog Title"}
            Img={"./assets/images/blogs/img_5.png"}
          />
        </div>
        <BlogReviews/>
        <div className="container">
          <BlogSlick/>
        </div>
      </div>
    </>
  );
}

export default Blog;
