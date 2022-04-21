import React, { Component } from "react";
import Slider from "react-slick";
import ImageClentOne from "../../images/clients/img_one.png";
import ImageClentTwo from "../../images/clients/img_two.png";
import ImageClentThree from "../../images/clients/img_three.png";
import ImageClentFour from "../../images/clients/img_four.png";
import ImageClentFive from "../../images/clients/img_five.png";


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
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
          </div>
          <Slider {...settings}>
            <div className="clients__card">
              <div className="img">
                <img
                  src={ImageClentOne}
                  alt="man one"
                  className="img"
                />
              </div>
            </div>
            
            <div className="clients__card">
              <div className="img">
                <img
                  src={ImageClentTwo}
                  alt="man one"
                  className="img"
                />
              </div>
            </div>


            <div className="clients__card">
              <div className="img">
                <img
                  src={ImageClentThree}
                  alt="man one"
                  className="img"
                />
              </div>
            </div>


            <div className="clients__card">
              <div className="img">
                <img
                  src={ImageClentFour}
                  alt="man one"
                  className="img"
                />
              </div>
            </div>


            <div className="clients__card">
              <div className="img">
                <img
                  src={ImageClentFive}
                  alt="man one"
                  className="img"
                />
              </div>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}
