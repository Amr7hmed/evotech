/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function FooterLogo() {
  return (
    <div className="footer__logo">
      <img src="./assets/images/logo/logo-footer.png" alt="EvoTech logo" width={"204px"} height={"108px"}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod <a href="/"> EvoTech </a> ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default FooterLogo;
