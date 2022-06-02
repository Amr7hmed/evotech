import React, { Component } from "react";

import Slider from "react-slick";
import ImageClentOne from "../../images/clients/img_one.png";
import ImageClentTwo from "../../images/clients/img_two.png";
import ImageClentThree from "../../images/clients/tbslogo.svg";
import ImageClentFour from "../../images/clients/img_four.webp";
import ImageClentFive from "../../images/clients/img_five.png";
import ImageClentSix from "../../images/clients/img_six.png";

export default class ClientsSlick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="team__slick">
        <div className="container">
          <div className="clients_detiles detiles">
            <p>Success Partners</p>
            <h4>Our Clients</h4>
          </div>
          <Slider {...settings}>
            <div className="clients__card">
              <div className="img">
                <a href={"https://ongoing-co.com"} target="_blank">
                  <img src={ImageClentOne} alt="man one" className="img" />
                </a>
              </div>
            </div>

            <div className="clients__card">
              <div className="img">
                <a href={"https://indepth-co.com"} target="_blank">
                  <img src={ImageClentTwo} alt="man one" className="img" />
                </a>
              </div>
            </div>

            <div className="clients__card">
              <div className="img">
                <a href={"https://tbs-eg.com"} target="_blank">
                  <img src={ImageClentThree} alt="man one" className="img" />
                </a>
              </div>
            </div>

            <div className="clients__card">
              <div className="img">
                <a href={"https://greendiamondco.com/"} target="_blank">
                  <img src={ImageClentFour} alt="man one" className="img" />
                </a>
              </div>
            </div>

            <div className="clients__card">
              <div className="img">
                <a href={"www.sadeedco.com/"} target="_blank">
                  <img src={ImageClentFive} alt="man one" className="img" />
                </a>
              </div>
            </div>

            <div className="clients__card">
              <div className="img">
                <a href={"https://beaulthyco.com/"} target="_blank">
                  <img src={ImageClentSix} alt="man one" className="img" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
