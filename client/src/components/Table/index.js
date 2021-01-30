import React from "react";
import "./style.css";

function Table(props) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Creator</th>
          <th scope="col">Culture</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      {props.results.map(result => (
        <tbody>
          <tr>
            <td>{result.Creator}</td>
            <td>{result.Culture}</td>
            <td><img alt='small' src={result.PrimaryImage.Small} /></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;