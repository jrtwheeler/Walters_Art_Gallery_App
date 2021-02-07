import React from "react";

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
          className="card container-fluid mb-3 pt-3"
          style={{ width: 25 + "rem" }}
        >
          {/* This is an image/link to go to art.thewalters.org/detail/whateverimagenumber */}
          <a href={result.ResourceURL}
            target="_blank"
            rel="noreferrer">
            <img
              className="card-img-top"
              src={result.PrimaryImage.Medium}
              alt={result.Title}
              variant="primary"
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">{result.Title}</h4>
            {/* note that "Collection" is "collectionArt" in the db schema */}
            <h5 className="card-text">{result.Collection} </h5>
            <h6>{result.DisplayLocation}</h6>
            <p className="card-text">{result.Description} </p>
            {/* This is a button/link to go to art.thewalters.org/detail/whateverimagenumber */}
            <a href={result.ResourceURL}
              target="_blank"
              role="button"
              className="btn btn-light"
              rel="noreferrer">
              See more
            </a>
            <button
              href="#"
              className="btn btn-light"
              onClick={addtoCollection}
            >
              {/* Add user validation and db action for favorite */}
              Add to collection
            </button>
          </div>
        </div>
      );
    });
    return <div className="row">{card}</div>;
  }
}

export default Card;
