import React from "react";

function Container(props) {
  return <div className="container container-fluid" style={props.style}>{props.children}</div>;
}

export default Container;
