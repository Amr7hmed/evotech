import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NewsLetter() {
  return (
    <div className="footer__newsletter">
      <div className="row">
        <div className="col-12">
          <h3> NEWSLETTER!..</h3>
        </div>
        <div className="col-12">
          <div className="news">
            <div className="text">
              Subscribe to our newsletter, so that you can be the first to know
              about new offers and promotions.
            </div>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Your E-mail address..."
                aria-label="Your E-mail address..."
                aria-describedby="basic-addon2"
              />
              <button className="btn input-group-text" id="basic-addon2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
