import React from "react";
import FooterContactus from "./footer_contactus";
import FooterList from "./footer_list";
import FooterLogo from "./footer_logo";

function Footer() {
  return (
    <footer>
      <section
        className="footer"
        style={{
          backgroundImage: `url("./assets/images/bg/footer.jpg")`,
        }}
      >
        <div className="overload"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <FooterLogo/> 
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
                <FooterList title={"MAIN PAGES"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
                <FooterList title={"Services"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <FooterContactus/>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
          <div className="container">
          <p>
          Copyright @ EvoTech 2022
          </p>
          </div>
      </section>
    </footer>
  );
}

export default Footer;
