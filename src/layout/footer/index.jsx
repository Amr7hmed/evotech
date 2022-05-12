import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FooterItems from "../../components/footer/footer_items";
import FooterLogo from "../../components/footer/footer_logo";

function Footer() {

  const [isVisible, setIsVisible] = useState(false);
   // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <footer>
      <section className="footer">
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
            Copyright  <NavLink to={"/evotech"} exact onClick={scrollToTop}>
            @ EvoTech
        </NavLink>{" "}2022
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
