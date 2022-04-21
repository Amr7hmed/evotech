import React from "react";
import { Helmet } from "react-helmet-async";
import SliderBlog from "../../components/home/SliderBlog";
import SliderHeader from "../../components/home/SliderHeader";
import SliderProposal from "../../components/home/SliderProposal";
import SliderServices from "../../components/home/SliderServices";
import AboutInformation from "../../components/public/about_Information";
import AboutSection from "../../components/public/about_section";
import ClientsSlick from "../../components/slick/clients_slick";
import TeamSlick from "../../components/slick/team_slick";
import AboutSectionHome from "../../images/public/about__section__home.png";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Home </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
          <SliderHeader/>
          <AboutSection Image={AboutSectionHome} Title="Who are we"/>
          <AboutInformation Styleclass="bg_light"/>
          <SliderServices/>
          <SliderBlog/>
          <SliderProposal/>
          <TeamSlick/>
          <ClientsSlick/>
      </div>
    </>
  );
}

export default Home;
