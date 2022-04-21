import React from "react";
import AdobeImage from "../../images/icon/lan/adobe.png";
import CssImage from "../../images/icon/lan/css.png";
import HtmlImage from "../../images/icon/lan/html.png";
import JavascriptImage from "../../images/icon/lan/javascript.png";
import VisualstudioImage from "../../images/icon/lan/visualstudio.png";
import WordpressImage from "../../images/icon/lan/wordpress.png";

function ServicesLanguage() {
  return (
    <section className="services__language">
          <div className="language">
            <h5> Programming Language</h5>
            <p> in Web Development</p>
            <div className="icons">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-2">

              <img src={AdobeImage}alt="Adobe" width={"90px"} height={"89px"}/>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">

              <img src={CssImage} alt="Css" width={"90px"} height={"89px"}/>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
              <img src={HtmlImage} alt="Html" width={"90px"} height={"89px"}/>

                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">

              <img src={JavascriptImage} alt="JavaScript" width={"90px"} height={"89px"}/>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">

              <img src={VisualstudioImage} alt="Visual Studio" width={"90px"} height={"89px"}/>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">

              <img src={WordpressImage} alt="Word Press" width={"90px"} height={"89px"}/>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}

export default ServicesLanguage;
