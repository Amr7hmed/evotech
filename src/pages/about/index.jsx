import React from "react";
import { Helmet } from "react-helmet-async";
import AboutVision from "../../components/about/aboutvision.jsx";
import AboutInformation from "../../components/public/about_Information";
import AboutSection from "../../components/public/about_section";
import HeaderPage from "../../components/public/header_page";
import ClientsSlick from "../../components/slick/clients_slick";
import TeamSlick from "../../components/slick/team_slick";
// import { useLocation  } from "react-router-dom";


function Aboutus() {
  // const params = useLocation ();
  // console.log(params.pathname)
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
        
      <HeaderPage Image="./assets/images/bg/about_header.jpg" Title="About Us"/>
      <AboutSection Styleclass="hidebutton" Image="./assets/images/public/about__section__about.png" Title="Who are we"/>
      <AboutVision/>
      <AboutInformation Styleclass="bg_primary"/>
      <TeamSlick/>
      <ClientsSlick/>
      </div>
    </>
  )
}

export default Aboutus;