
import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderPage from "../../components/public/header_page";
import ServicesComponent from "../../components/services/services_component";
import ServesHeaderImage from "../../images/bg/serves_header.jpg";

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
        <HeaderPage
          Image={ServesHeaderImage}
          Title="Services"
        />
        <ServicesComponent/>
      </div>
    </>
  );
}

export default Services;
