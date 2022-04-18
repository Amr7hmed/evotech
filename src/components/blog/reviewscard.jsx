import React from "react";
import Stars from "./stars";

function ReviewsCard(props) {
  const { Styleclass, Image, Name } = props;
  return (
    <div className={"reviewscard " + Styleclass}>
      <div className="user">
        <div className="imguser">
          <img src={Image} alt="User Name" />
        </div>
        <div className="header">
          <h6>{Name}</h6>
          <Stars />
          <div className="day">5 September 2018</div>
        </div>
      </div>

      <div className="data">
        Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi
        necessitatibus lorem perspiciatis repudiandae ad nesciunt deleniti
        facilisi,{" "}
        <span>
          est orci libero, aspernatur asperiores ornare aliquip vehicula?
          Proident? Nobis? Deserunt, conubia facilis, amet torquent, voluptate
          dictum, sapien, lorem? Veniam! Vestibulum tenetur atque ultricies
          justo pariatur dis eget condimentum libero, occaecat! Vulputate
          molestias quaerat, maxime!.
        </span>
        <button className="btn">Read More</button>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default ReviewsCard;
