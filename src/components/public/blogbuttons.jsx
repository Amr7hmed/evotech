import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function BlogButtons() {
  return (
    <section className="blog__buttons">
      <button className="btn comments">
        (4)
        <FontAwesomeIcon icon={faComments} />
      </button>
      <button className="btn">
        (20)
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="btn ">
        (10)
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </section>
  );
}

export default BlogButtons;
