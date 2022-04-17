import React from "react";
import PortfolioItems from "./portfolio_items";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <p>Success Partners</p>
          <h5>Our Portfolio</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>
        </div>
        <PortfolioItems/>
      </div>
    </section>
  );
}

export default Portfolio;
