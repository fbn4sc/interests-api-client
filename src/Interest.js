import React from "react";
import "./Interest.css";
import { remove as removeDiacritics } from "diacritics";

const Interest = props => {
  const searchTermIndex = removeDiacritics(props.interest.name)
    .toLowerCase()
    .indexOf(props.searchTerm);
  const name = props.interest.name;
  const searchTerm = props.searchTerm;

  return (
    <li className="interest-item" style={{ overflow: "auto" }}>
      {name.substring(0, searchTermIndex)}
      <strong>
        {name.substring(searchTermIndex, searchTermIndex + searchTerm.length)}
      </strong>
      {name.substring(searchTermIndex + searchTerm.length)}
      <button type="button" className="button">
        Remap
      </button>
    </li>
  );
};

export default Interest;
