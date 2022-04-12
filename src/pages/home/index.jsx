import React from "react";
import { Helmet } from "react-helmet-async";
import SliderHeader from "../../components/home/SliderHeader";
import SliderServices from "../../components/home/SliderServices";
import AboutInformation from "../../components/public/AboutInformation ";
import AboutSection from "../../components/public/AboutSection";

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
          <AboutSection/>
          <AboutInformation bgLight="bg_light"/>
          <SliderServices/>
      </div>
    </>
  );
}

export default Home;
