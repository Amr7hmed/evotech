import { faChartBar, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faChargingStation, faCode, faFolderTree, faPaintbrush, faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Methodology() {
  return (
    <section className="services__methodology">
      <div className="container">
        <div className="title">
          <h4>Our Web Development Methodology</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            ipsa est maxime cupiditate nesciunt aut ab culpa, ad quia suscipit
            sunt id debitis, eius odio?
          </p>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
              <span>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <p>Defining Site Goals</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <span>
                <FontAwesomeIcon icon={faCode}/>
                </span>
              <p>Development Website</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <span>
                <FontAwesomeIcon icon={faFolderTree}/>
                </span>
              <p>Build Site Structure</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <span>
                <FontAwesomeIcon icon={faChartBar} />
                </span>
              <p>Test Website</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <span>
                <FontAwesomeIcon icon={faPaintbrush} />
                </span>
              <p>Design Demo</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item">
                <span>
                <FontAwesomeIcon icon={faPaintRoller} />
                </span>
              <p>Delivery & Optimizion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
