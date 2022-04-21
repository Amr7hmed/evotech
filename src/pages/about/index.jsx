import React from "react";
import { Helmet } from "react-helmet-async";
import AboutVision from "../../components/about/aboutvision.jsx";
import AboutInformation from "../../components/public/about_Information";
import AboutSection from "../../components/public/about_section";
import HeaderPage from "../../components/public/header_page";
import ClientsSlick from "../../components/slick/clients_slick";
import TeamSlick from "../../components/slick/team_slick";
import AboutSectionImg from "../../images/public/about__section__about.png";
import AboutHeaderImg from "../../images/bg/about_header.jpg";


function Aboutus() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || About us </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        
      <HeaderPage Image={AboutHeaderImg} Title="About Us"/>
      <AboutSection Styleclass="hidebutton" Image={AboutSectionImg} Title="Who are we"/>
      <AboutVision/>
      <AboutInformation Styleclass="bg_primary"/>
      <TeamSlick/>
      <ClientsSlick/>
      </div>
    </>
  )
}

export default Aboutus;