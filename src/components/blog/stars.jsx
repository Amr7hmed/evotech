import React from 'react';
import StarImageone from "../../images/icon/star_one.png";
import StarImagetwo from "../../images/icon/star_two.png";

function Stars() {
  return (
    <div className='stars'>
        <img src={StarImageone} alt="star" />
        <img src={StarImageone} alt="star" />
        <img src={StarImageone} alt="star" />
        <img src={StarImagetwo} alt="star" />
        <img src={StarImagetwo} alt="star" />
        
    </div>
  )
}

export default Stars;