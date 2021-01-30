import React from "react";
import "./style.css";

function CarouselDiv(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default CarouselDiv;

