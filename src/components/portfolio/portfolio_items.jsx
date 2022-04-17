import React from "react";
import ButtonsFiltter from "../public/buttons_filtter";
import PortfolioCard from "./portfolio_card";

function PortfolioItems() {
  const Items = [
    "./assets/images/portfolio/img-1.jpg",
    "./assets/images/portfolio/img-2.jpg",
    "./assets/images/portfolio/img-3.png",
    "./assets/images/portfolio/img-4.jpg",
    "./assets/images/portfolio/img-5.jpg",
    "./assets/images/portfolio/img-6.jpg",
    "./assets/images/portfolio/img-7.jpg",
    "./assets/images/portfolio/img-8.jpg",
    "./assets/images/portfolio/img-9.jpg",
    "./assets/images/portfolio/img-10.png",
    "./assets/images/portfolio/img-11.png",
    "./assets/images/portfolio/img-12.jpg",
  ];
  return (
    <section className="portfolio__items">
      <ButtonsFiltter/>
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
