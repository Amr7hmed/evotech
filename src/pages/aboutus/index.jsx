import React from "react";
import { Helmet } from "react-helmet-async";
import AboutInformation from "../../components/public/AboutInformation ";
import AboutSection from "../../components/public/AboutSection";
import HeaderPage from "../../components/public/HeaderPage";
import ClientsSlick from "../../components/slick/clients_slick";
import TeamSlick from "../../components/slick/team_slick";


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
        
      <HeaderPage/>
      <AboutSection/>
      <AboutInformation Styleclass="bg_primary"/>
      <TeamSlick/>
      <ClientsSlick/>
      </div>
    </>
  )
}

export default Aboutus;