import React from "react";
import NewsLetter from "./newsletter.jsx";
import FooterServices from "./footer_services.jsx";
import FooterMainpages from "./footer_mainpages.jsx";
import FooterContactus from "./footer_contactus.jsx";

function FooterItems() {
  return (
    <div className="footer__items">
      <div className="row">
        <div className="col-12">
          <NewsLetter />
        </div>
        <div className="col-12">
          <div className="row">
              <div className="col-md-12 col-lg-4">
                  <FooterMainpages/>
              </div>
              <div className="col-md-12 col-lg-4">
                  <FooterServices/>
              </div>
              <div className="col-md-12 col-lg-4">
                  <FooterContactus/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterItems;