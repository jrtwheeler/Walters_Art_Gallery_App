import React from "react";

function Card(props) {
<<<<<<< HEAD
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
=======

    if (props.results) {
        const card = props.results.map(result => {
            return (
                <div className="card container-fluid mb-3 pt-3" style={{ width: 25 + 'rem' }}>
                    <img className="card-img-top" src={result.PrimaryImage.Medium} alt=""/>
                    <div className="card-body">
                        <h1 className="card-title">{result.Title}</h1>
                        <h2 className="card-text">{result.Collection} </h2>
                        <h4>{result.DisplayLocation}</h4>
                        <p className="card-text">{result.Description} </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {card}
            </div>
        )
    }
>>>>>>> 06c31017f0c7036c85f3aa29fa9ae2a802b89e25
}

export default Card;
