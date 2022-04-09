import React from "react";
import { Helmet } from "react-helmet-async";

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
      <div>Home</div>
    </>
  );
}

export default Home;
