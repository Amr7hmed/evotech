import React from "react";
import ButtonsFiltter from "../public/buttons_filtter";
import PortfolioCard from "./portfolio_card";
import ClentImage1 from "../../images/portfolio/img-1.jpg";
import ClentImage2 from "../../images/portfolio/img-2.jpg";
import ClentImage3 from "../../images/portfolio/img-3.png";
import ClentImage4 from "../../images/portfolio/img-4.jpg";
import ClentImage5 from "../../images/portfolio/img-5.jpg";
import ClentImage6 from "../../images/portfolio/img-6.jpg";
import ClentImage7 from "../../images/portfolio/img-7.jpg";
import ClentImage8 from "../../images/portfolio/img-8.jpg";
import ClentImage9 from "../../images/portfolio/img-9.jpg";
import ClentImage10 from "../../images/portfolio/img-10.png";
import ClentImage11 from "../../images/portfolio/img-11.png";
import ClentImage12 from "../../images/portfolio/img-12.jpg";

function PortfolioItems() {
  const Items = [
    ClentImage1,
    ClentImage2,
    ClentImage3,
    ClentImage4,
    ClentImage5,
    ClentImage6,
    ClentImage7,
    ClentImage8,
    ClentImage9,
    ClentImage10,
    ClentImage11,
    ClentImage12,
  ];
  return (
    <section className="portfolio__items">
      <ButtonsFiltter />
      <div className="portfolio__cards">
        <div className="row">
          {Items.map((img, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <PortfolioCard img={img} key={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioItems;
