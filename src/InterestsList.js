import React from "react";
import Interest from "./Interest";

const InterestsList = props => {
  return (
    <ul
      style={{
        listStyle: "none",
        marginTop: 10,
        padding: "0 15px",
        width: "100%"
      }}
    >
      {props.interests.map((interest, i) => (
        <Interest key={i} interest={interest} searchTerm={props.searchTerm} />
      ))}
    </ul>
  );
};

export default InterestsList;
