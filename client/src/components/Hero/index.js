import React from "react";
import "./style.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getCurrentDate} from '../../utils/Date'

export function Hero(props) {
  return (
    <header className="header">
      <h1 class="display-4 text-center font-weight-bolder text-white">
            {props.children}</h1>
            {/* The current date function call */}
            <h4>{getCurrentDate()}</h4>
    </header>
  );
}

// Export the function 
export default Hero;
