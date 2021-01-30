import React from "react";

function Card(props) {
  if (props.results) {
    const card = props.results.map((result) => {
      return (
        <div className="card" style={{ width: 30 + "rem" }}>
          <img
            className="card-img-top"
            src={result.PrimaryImage.Medium}
            alt=""
          />
          <div className="card-body">
            <h1 className="card-title">{result.Title}</h1>
            <h2 className="card-text">{result.Collection} </h2>
            <h4>{result.DisplayLocation}</h4>
            <p className="card-text">{result.Description} </p>
            <button href="#" className="btn btn-primary">
              {/* Add modal popout for larger view */}
              See more
            </button>
            <button href="#" className="btn btn-primary">
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
