
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartColumn, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutInformation(props) {
  const { Styleclass } = props;
  return (
    <section className={"aboutinformation "+ Styleclass}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
                <FontAwesomeIcon icon={faClock} className="icon"/>
              </div>
              <div className="aboutinformation__text">
                <h4>Fast Process</h4>
                <p>
                  The process takes minutes and you get instant quotes online.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
              <FontAwesomeIcon icon={faHandHoldingDollar} className="icon"/>
              </div>

              <div className="aboutinformation__text">
                <h4>Compare Prices</h4>
                <p>
                  Compare quotes online and find the policy that’s right for
                  you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
              <FontAwesomeIcon icon={faChartColumn} className="icon"/>
              </div>

              <div className="aboutinformation__text">
                <h4>Guaranteed Deal</h4>
                <p>We guarantee the cheapest car insurance ever! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInformation;
