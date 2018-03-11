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

        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 col-md-6">
              <ol className="list-group">
                {this.state.suggestions.map(suggestion => (
                  <li className="list-group-item">{suggestion.name}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestionsList;
