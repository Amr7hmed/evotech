import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderPage from "../../components/public/header_page";
import ServicesComponent from "../../components/services/services_component";
import ServesHeaderImage from "../../images/bg/serves_header.jpg";

// Images Services Component
import webdesign from "../../images/services/webdesign.jpg";
import webdevelopment from "../../images/services/web-development.png";
import webmanagement  from "../../images/services/website-management.jpg";
import domainhosting  from "../../images/services/domainhosting.jpg";
import mobileapplication  from "../../images/services/mobileapplication.jpg";
import ecommerce  from "../../images/services/e-commerce.jpg";
import consulting  from "../../images/services/softwareconsulting.png";

// ./assets/images/bg/serves_header.jpg
function Services() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Services </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <HeaderPage Image={ServesHeaderImage} Title="Services" />
        <ServicesComponent
          Image={webdevelopment}
          styleclass={"left"}
          Title="Web Development"
        />

        <ServicesComponent
          Image={webdesign}
          styleclass={"right"}
          Title="Web design (UI / UX)"
        />

        <ServicesComponent
          Image={webmanagement}
          styleclass={"left"}
          Title="Web management & maintenance"
        />

        <ServicesComponent
          Image={domainhosting}
          styleclass={"right"}
          Title="Domain & Hosting"
        />

        <ServicesComponent
          Image={mobileapplication}
          styleclass={"left"}
          Title="Mobile Application Developer"
        />

        <ServicesComponent
          Image={ecommerce}
          styleclass={"right"}
          Title="e-commerce website design"
        />

        <ServicesComponent
          Image={consulting}
          styleclass={"left"}
          Title="Software Consulting"
        />
      </div>
    </>
  );
}

export default Services;
