import React, { Component } from "react";
import Slider from "react-slick";
import BlogSlickImg from "../../images/blogs/blogslick.png";

export default class BlogSlick extends Component {
  
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
      <div className={"blog__slick "+ this.props.Styleclass}>
        <div className="container">
          <Slider {...settings}>
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>
            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>
            
            <div className="blog__slick__card">
              <div className="img">
                <img
                  src={BlogSlickImg}
                  alt="man one"
                  width={"277px"}
                  height={"100%"}
                  className="img"
                />
                <div className="category">category</div>
              </div>
              <div className="data">
                <div className="header">
                  <div className="link">
                    26/06/2017, POSTED BY <span>KHALID SAIED</span>
                  </div>
                  <h6>PROFESSIONAL BIDDING</h6>
                </div>
                <div className="detiles">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}
