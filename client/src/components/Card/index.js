import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import API from "../../utils/API";

function Card(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = props;
  console.log("card", props);
  const addToFavorites = (favorite) => {
    return (e) => API.updateUser(user._id, { favorites: [favorite] });
  };

  if (props.results) {
    const card = props.results.map((result, i) => {
      return (
        <div
          key={`result-${i}`}
          className="card container-fluid mb-3 pt-3"
          style={{ width: 25 + "rem" }}
        >
          <img
            className="card-img-top"
            src={result.PrimaryImage.Medium}
            alt={result.Title}
            variant="primary"
            onClick={handleShow}
          />
          <div className="card-body">
            <h4 className="card-title">{result.Title}</h4>
            <h5 className="card-text">{result.Collection} </h5>
            <h6>{result.DisplayLocation}</h6>
            <p className="card-text">{result.Description} </p>
            <button
              variant="primary"
              onClick={handleShow}
              className="btn btn-light"
            >
              {/* Add modal popout for larger view */}
              See more
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{result.Title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  className="card-img-top"
                  src={result.PrimaryImage.Large}
                  alt={result.Title}
                />
                It's a Modal! Yay!
              </Modal.Body>
            </Modal>
            <button className="btn btn-light" onClick={addToFavorites(result)}>
              {" "}
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
