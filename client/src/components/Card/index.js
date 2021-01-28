import React from "react";

function Card(props) {
    // {props.results.map(result => (
    // return (

    //             <div className="card" style="width: 18rem;">

    //                 <img src={result.PrimaryImage.Medium} className="card-img-top" alt="...">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Card title</h5>
    //                         <p className="card-text">{result.Culture}</p>
    //                         <a href="#" className="btn btn-primary">Go somewhere</a>

    //                     </div>
    //             </div>

    //         )
    //         ))}

    if (props.results) {
        const card = props.results.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    <img className="card-img-top" src={result.PrimaryImage.Medium} />
                    <div className="card-body">
                        <h1 className="card-title">{result.Culture}</h1>
                        {/* <h2 className="card-text">{t.location} </h2>
                        <h4 className="card-text">{t.summary} </h4> */}
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