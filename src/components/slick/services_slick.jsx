import React, { Component } from "react";
import Slider from "react-slick";

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
                src="./assets/images/icon/services/web_light.png"
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/web_primary.png"
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
                src="./assets/images/icon/services/development_light.png"
                alt="Development"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/development_primary.png"
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
                src="./assets/images/icon/services/mobile_light.png"
                alt="Mobile App"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/mobile_primary.png"
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
                src="./assets/images/icon/services/hosting_light.png"
                alt="Hosting Services"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/hosting_primary.png"
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
                src="./assets/images/icon/services/web_light.png"
                alt="web design"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/web_primary.png"
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
                src="./assets/images/icon/services/development_light.png"
                alt="Development"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/development_primary.png"
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
                src="./assets/images/icon/services/mobile_light.png"
                alt="Mobile App"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/mobile_primary.png"
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
                src="./assets/images/icon/services/hosting_light.png"
                alt="Hosting Services"
                width={"88px"}
                height={"53px"}
                className="img_light"
              />
              <img
                src="./assets/images/icon/services/hosting_primary.png"
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
