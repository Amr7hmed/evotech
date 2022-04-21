import { faFacebook, faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";
import ImageManOne from "../../images/team/man_one.png";
import ImageManTwo from "../../images/team/man_two.png";
import ImageManThree from "../../images/team/man_three.png";
import ImageManFour from "../../images/team/man_four.png";





export default class TeamSlick extends Component {
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
          <div className="detiles">
            <p>special team</p>
            <h4>Our Team</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
          </div>
          <Slider {...settings}>
            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManOne}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManTwo}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManThree}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            
            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManFour}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManOne}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManTwo}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManThree}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>

            
            <div className="team__slick__card">
              <div className="img">
                <img
                  src={ImageManFour}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
              </div>
              <div className="data">
                <h6>Dr. Mohamed Ahmed</h6>
                <p>Chairman of Board of Directors</p>
                <div className="soceilmeda">
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="#" className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                  <a href="#" className="envelope">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
