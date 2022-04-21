import React from "react";
import { Helmet } from "react-helmet-async";
import Portfolio from "../../components/portfolio";
import AboutSection from "../../components/public/about_section";
import HeaderPage from "../../components/public/header_page";
import ServicesLanguage from "../../components/services/services_language";
import Methodology from "../../components/services/services_methodology";
import ServesHeaderImage from "../../images/bg/serves_header.jpg";
import ServesAboutImage from "../../images/public/about__section__about.png";

// ./assets/images/bg/serves_header.jpg
function WebSolutions() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Web Solutions </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <HeaderPage
          Image={ServesHeaderImage}
          Title="Web Solutions"
        />
        <AboutSection
          Styleclass="hidebutton"
          Hidelink={"hidelink"}
          Image={ServesAboutImage}
          Title="Web Solutions"
          Styledetiles="styledetiles_serves"
        />
        <ServicesLanguage/>
        <Methodology/>
        <Portfolio/>
      </div>
    </>
  );
}

export default WebSolutions;
