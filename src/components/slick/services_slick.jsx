import React, { Component } from "react";
import Slider from "react-slick";
import WebLight from "../../images/icon/services/web_light.png";
import WebPrimary from "../../images/icon/services/web_primary.png";
import MobileLight from "../../images/icon/services/mobile_light.png";
import MobilePrimary from "../../images/icon/services/mobile_primary.png";
import HostingLight from "../../images/icon/services/hosting_light.png";
import HostingPrimary from "../../images/icon/services/hosting_primary.png";



export default class ServicesSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 500,
      arrows:false,
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
      <div className="slider__services__slick">
        <Slider {...settings}>

          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={WebLight}
                alt="Web Development"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={WebPrimary}
                alt="Web Development"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>Web Development</h4>
          </div>

          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={MobileLight}
                alt="Domain & Hosting"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={MobilePrimary}
                alt="Domain & Hosting"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>Domain & Hosting</h4>
          </div>

          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Web design (UI / UX)"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="Web design (UI / UX)"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Web design (UI / UX)</h4>
          </div>
          
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Web Management & Maintenance"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="Web Management & Maintenance"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Web Management & Maintenance</h4>
          </div>



          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Mobile Application"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="Mobile Application"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Mobile Application</h4>
          </div>



          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="E-Commerce Website"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="E-Commerce Website"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>E-Commerce Website</h4>
          </div>

          


          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Software Consulting"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="Software Consulting"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Software Consulting</h4>
          </div>
          
        </Slider>
      </div>
    );
  }
}
