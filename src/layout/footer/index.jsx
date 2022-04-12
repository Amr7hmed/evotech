import React from "react";
import FooterItems from "../../components/footer/footer_items";
import FooterLogo from "../../components/footer/footer_logo";

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
            <div className="col-md-12 col-lg-12 col-xl-5">
              <FooterLogo />
            </div>
            <div className="col-md-12 col-lg-12 col-xl-7">
              <FooterItems />
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container">
          <div className="text">
            Copyright <a href="/">@ EvoTech</a> 2022
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
