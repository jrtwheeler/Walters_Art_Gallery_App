import React from "react";

function SearchForm(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <h6>Type in a keyword below to search the Gallery for works of art.</h6>
        <br/>
        {/* <label htmlFor="search">Type in a keyword below to get search the Gallery for works of art. </label> */}
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="search form-control text-center"
          placeholder="Search works of art"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-light">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
