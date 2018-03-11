import React, { Component } from "react";
import axios from "axios";
import App from "./App";

class SuggestionsList extends Component {
  state = { suggestions: [] };

  componentDidMount() {
    axios
      .get("http://localhost:3000/suggestions")
      .then(response => this.setState({ suggestions: response.data }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Suggestions List</h1>

        <ol>
          {this.state.suggestions.map(suggestion => <li>{suggestion.name}</li>)}
        </ol>
      </div>
    );
  }
}

export default SuggestionsList;
