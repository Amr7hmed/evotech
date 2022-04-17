import React from 'react'

function ButtonsFiltter(props) {
    const {Styleclass} = props;
  return (
    
    <div className={"buttons__filtter "+Styleclass}>
    <button className="btn active">All</button>
    <button className="btn">Shop</button>
    <button className="btn">Business</button>
    <button className="btn">Others</button>
  </div>
  )
}

export default ButtonsFiltter