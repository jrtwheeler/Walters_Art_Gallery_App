import React from "react";

function Card(props) {

    if (props.results) {
        const card = props.results.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    <img className="card-img-top" src={result.PrimaryImage.Medium} />
                    <div className="card-body">
                        <h1 className="card-title">{result.Title}</h1>
                        <h2 className="card-text">{result.Collection} </h2>
                        <h4 className="card-text">{result.Description} </h4>
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
}

export default Card;