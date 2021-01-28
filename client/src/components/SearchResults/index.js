import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((result) => (
        <li key={result} className="list-group-item">
          <img
            alt="Art"
            src={result.Items.PrimaryImage.medium}
            className="img-fluid"
          />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
