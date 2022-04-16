import React from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/public/AboutSection";
import HeaderPage from "../../components/public/HeaderPage";
import ServicesLanguage from "../../components/services/services_language";
import Methodology from "../../components/services/services_methodology";


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
          Image="./assets/images/bg/serves_header.jpg"
          Title="Web Solutions"
        />
        <AboutSection
          Styleclass="hidebutton"
          Hidelink={"hidelink"}
          Image="./assets/images/public/about__section__about.png"
          Title="Web Solutions"
          Styledetiles="styledetiles_serves"
        />
        <ServicesLanguage/>
        <Methodology/>
      </div>
    </>
  );
}

export default WebSolutions;
