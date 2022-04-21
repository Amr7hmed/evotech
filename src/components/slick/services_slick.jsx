import React, { Component } from "react";
import Slider from "react-slick";
import WebLight from "../../images/icon/services/web_light.png";
import WebPrimary from "../../images/icon/services/web_primary.png";
import MobileLight from "../../images/icon/services/mobile_light.png";
import MobilePrimary from "../../images/icon/services/mobile_primary.png";
import HostingLight from "../../images/icon/services/hosting_light.png";
import HostingPrimary from "../../images/icon/services/hosting_primary.png";
import DevelLight from "../../images/icon/services/development_light.png";
import DevelPrimary from "../../images/icon/services/development_primary.png";



export default class ServicesSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
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
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={WebPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>web design </h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={DevelLight}
                alt="Development"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={DevelPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
              <h4>Development</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={MobileLight}
                alt="Mobile App"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={MobilePrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>Mobile App</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Hosting Services"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Hosting Services</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={WebLight}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={WebPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>web design </h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={DevelLight}
                alt="Development"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={DevelPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
              <h4>Development</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={MobileLight}
                alt="Mobile App"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={MobilePrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />
            </div>
            <h4>Mobile App</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          <div className="slider__services__slick__item">
            <div className="icon">
              <img
                src={HostingLight}
                alt="Hosting Services"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src={HostingPrimary}
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_primary"
              />

            </div>
            <h4>Hosting Services</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
          </div>
          
        </Slider>
      </div>
    );
  }
}
