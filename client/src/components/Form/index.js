import React from "react";
import Col from "../Col";
import "./style.css";

function SearchForm(props) {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      
        <Col size="md-4">
          <div className="form">
        <form>
          <input
            value={props.value}
            name="search"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search the database for an employee"
          />
          <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
        </div>
        </Col>
      
    );
  }

export default SearchForm;
