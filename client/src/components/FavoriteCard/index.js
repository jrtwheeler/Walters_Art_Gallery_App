import React from "react";
import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function FavoriteCard(props) {
  console.log(props.user.favorites);

  const { user } = props;
  const addToFavorites = (favorite) => {
    return (e) => API.updateUser(user._id, { favorites: [favorite] });
  };

  if (user.favorites) {
    const favoriteCard = user.favorites.map((favorite, i) => {
      const slash = "/";
      const artLink =
        "https://art.thewalters.org" +
        slash +
        "detail" +
        favorite.ResourceURL.slice(
          favorite.ResourceURL.lastIndexOf("/"),
          favorite.ResourceURL.length
        );
      console.log(favorite);
      return (
        <div
          key={`favorite-${i}`}
          className="container-fluid mb-3 pt-3"
          style={{ width: 12 + "rem", height: "100%" }}
        >
          {/* This is an image/link to go to art.thewalters.org/detail/whateverimagenumber */}
          <a href={artLink} target="_blank" rel="noreferrer">
            <img
              className=""
              src={favorite.PrimaryImage.Medium}
              alt={favorite.Title}
              variant="primary"
            />
          </a>
          <div className="landingCard pt-3">
            <h6 className="card-title text-center">
              <strong>{favorite.Title}</strong>
            </h6>

            <h6 className="card-text text-center">{favorite.Creator}</h6>
            <h6 className="card-text text-center">
              <i>{favorite.Collection}</i>
            </h6>
            {/* <p className="">{result.DisplayLocation}</p> */}
            {/* <p className="card-text">{result.Description} </p> */}

            {/* This is a button/link to go to art.thewalters.org/detail/whateverimagenumber */}
            <div className="text-center p-1">
              <a
                href={artLink}
                target="_blank"
                role="button"
                className="btn btn-light landingBtn"
                rel="noreferrer"
              >
                <h3>
                  <FontAwesomeIcon icon={faEye} style={{ color: "#4A6479" }} />
                </h3>
              </a>
              <button
                href="#"
                className="btn btn-light landingBtn"
                onClick={addToFavorites(favorite)}
              >
                <h3>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#4A6479" }} />
                </h3>
              </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{favoriteCard}</div>;
  } else {
    return <p>You don't have any favorites yet!</p>;
  }
}
export default FavoriteCard;
