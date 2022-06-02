import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SliderProposal() {
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
    <section className="slider__proposal">
      <div className="overload"></div>
      <div className="container">
        <div className="detiles">
          <p>We are your partner to make your business always better</p>
          <div className="detiles_doc">
            <h4>Ready To Grow Your Business</h4>
            <p>
              Fill Out The Form Below And One Of Our Team Will Contact You
              Personally
            </p>
          </div>
          
          <NavLink
                className="btn"
                to={"/contactus"}
                exact
                onClick={scrollToTop}
              >
                GET PROPOSAL
              </NavLink>
        </div>
      </div>
    </section>
  );
}

export default SliderProposal;
