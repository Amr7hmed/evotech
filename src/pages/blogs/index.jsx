import React from "react";
import { Helmet } from "react-helmet-async";
import ButtonsFiltter from "../../components/public/buttons_filtter";
import HeaderPage from "../../components/public/header_page";
import BlogsCard from "../../components/blogs/blogs_card";
import BlogHeaderImage from "../../images/bg/blog_header.jpg";

import BlogImage1 from "../../images/blogs/img_1.png";
import BlogImage2 from "../../images/blogs/img_2.png";
import BlogImage3 from "../../images/blogs/img_3.png";
import BlogImage4 from "../../images/blogs/img_4.png";
import BlogImage5 from "../../images/blogs/img_5.png";

function Blogs() {
  
  
  const Items = [
    BlogImage1,
    BlogImage2,
    BlogImage3,
    BlogImage4,
    BlogImage5,
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Blogs </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <HeaderPage Image={BlogHeaderImage} Title="Blogs" />
        <ButtonsFiltter Styleclass="mr_blog" />
        <div className="container">
          {Items.map((img, index) => (
              <BlogsCard img={img} key={index} Category={"category"} Title={"THE BEST NEWS TITLE"}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
