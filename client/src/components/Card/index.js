import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';


function Card(props) {
  const addtoCollection = () => {
    console.log("Button");
  };

  if (props.results) {
    // console.log(props.results[0].ResourceURL);
    const card = props.results.map((result, i) => {
      return (
        <div
          key={`result-${i}`}
          className="container-fluid mb-3 pt-3"
          style={{ width: 12 + "rem", height: "100%" }}
        >

          {/* This is an image/link to go to art.thewalters.org/detail/whateverimagenumber */}
          <a href={result.ResourceURL}
            target="_blank"
            rel="noreferrer">
            <img
              className=""
              src={result.PrimaryImage.Medium}
              alt={result.Title}
              variant="primary"
            />
          </a>
          <div className="landingCard pt-3">
            <h6 className="card-title text-center"><strong>{result.Title}</strong></h6>
            {/* note that "Collection" is "collectionArt" in the db schema */}
            <h6 className="card-text text-center">{result.Collection}</h6>
            {/* <p className="">{result.DisplayLocation}</p> */}
            {/* <p className="card-text">{result.Description} </p> */}

            {/* This is a button/link to go to art.thewalters.org/detail/whateverimagenumber */}
            <div className="text-center p-1">
              <a href={result.ResourceURL}
              target="_blank"
              role="button"
              className="btn btn-light landingBtn"
              rel="noreferrer">
              <h3><FontAwesomeIcon icon={faEye} style={{color: "#4A6479"}}/></h3>
            </a>
            <button
              href="#"
              className="btn btn-light landingBtn"
              onClick={addtoCollection}
            >
              <h3><FontAwesomeIcon icon={faPlus} style={{color: "#4A6479"}}/></h3>
            </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{card}</div>;
  }
}

export default Card;
