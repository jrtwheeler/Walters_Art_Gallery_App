import React from "react";
import "./style.css";
import { getCurrentDate } from "../../utils/Date";

export function Hero(props) {
  return (
    <header className="header">
      {props.children}
      {/* The current date function call */}
      <h4>{getCurrentDate()}</h4>
    </header>
  );
}

// Export the function
export default Hero;
