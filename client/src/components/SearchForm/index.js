import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="search form-control"
          placeholder="search"
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
