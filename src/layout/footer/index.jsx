import React from "react";
import FooterContactus from "../../components/footer/footer_contactus";
import FooterCopyright from "../../components/footer/footer_copyright";
import FooterList from "../../components/footer/footer_list";
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
            <div className="col-sm-12 col-md-6 col-lg-5">
              <FooterLogo />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <FooterList title={"MAIN PAGES"} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <FooterList title={"Services"} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <FooterContactus />
            </div>
          </div>
        </div>
      </section>
      <FooterCopyright/>
    </footer>
  );
}

export default Footer;
