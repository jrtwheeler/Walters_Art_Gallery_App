import React from "react";
import API from "../../utils/API";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

function Card(props) {
  const { user } = props;

  const addToFavorites = (favorite) => {
    return (e) => API.updateUser(user._id, { favorites: [favorite] });
  };

  if (props.results) {
    const card = props.results.map((result, i) => {
      let slash = "/";
      let nonsense =
        "https://art.thewalters.org" +
        slash +
        "detail" +
        result.ResourceURL.slice(
          result.ResourceURL.lastIndexOf("/"),
          result.ResourceURL.length
        );
      return (
        <div
          key={`result-${i}`}
          className="container-fluid mb-3 pt-3"
          style={{ width: 12 + "rem", height: "100%" }}
        >
          {/* This is an image/link to go to art.thewalters.org/detail/whateverimagenumber */}
          <a href={nonsense} target="_blank" rel="noreferrer">
            <img
              className=""
              src={result.PrimaryImage.Medium}
              alt={result.Title}
              variant="primary"
            />
          </a>
          <div className="landingCard pt-3">
            <h6 className="card-title text-center">
              <strong>{result.Title}</strong>
            </h6>
            <h6 className="card-text text-center">{result.Creator}</h6>
            <h6 className="card-text text-center">
              <i>{result.Collection}</i>
            </h6>
            {/* This is a button/link to go to art.thewalters.org/detail/whateverimagenumber */}
            <div className="text-center p-1">
              <a
                href={nonsense}
                target="_blank"
                rel="noreferrer"
                role="button"
                className="btn btn-light landingBtn"
                data-tip
                data-for="seeMore"
              >
                <h3>
                  <FontAwesomeIcon icon={faEye} style={{ color: "#4A6479" }} />
                </h3>
              </a>
              <ReactTooltip
                id="seeMore"
                place="top"
                effect="solid"
                backgroundColor="#4A6479"
              >
                See more details
              </ReactTooltip>
              <button
                href="#"
                className="btn btn-light landingBtn"
                onClick={addToFavorites(result)}
                data-tip
                data-for="addFavorite"
                rel="noreferrer"
              >
                <h3>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#4A6479" }} />
                </h3>
              </button>
              <ReactTooltip
                id="addFavorite"
                place="top"
                effect="solid"
                backgroundColor="#4A6479"
              >
                Add to My Collection
              </ReactTooltip>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{card}</div>;
  }
}

export default Card;
