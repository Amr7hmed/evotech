import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartColumn,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutInformation(props) {
  const { Styleclass } = props;
  return (
    <section className={"aboutinformation " + Styleclass}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
                <FontAwesomeIcon icon={faClock} className="icon" />
              </div>
              <div className="aboutinformation__text">
                <h4>Professionally Design Innovative</h4>
                <p>
                  Professionally design innovative applications for a variety of
                  management and technical tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
              </div>

              <div className="aboutinformation__text">
                <h4>Fast Process</h4>
                <p>
                Supervise the work and ensure speed, accuracy, quality and 
professional implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="aboutinformation__item">
              <div className="aboutinformation__img">
                <FontAwesomeIcon icon={faChartColumn} className="icon" />
              </div>

              <div className="aboutinformation__text">
                <h4>Guaranteed Deal</h4>
                <p>We also rely on a dedicated team of programming experts. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInformation;
