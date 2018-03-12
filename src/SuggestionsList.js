import React, { Component } from "react";
import App from "./App";
import Suggestion from "./Suggestion";
import api from "./api";

class SuggestionsList extends Component {
  state = { suggestions: [] };

  componentDidMount() {
    const apiHost = process.env.REACT_APP_API_HOST;
    api.getSuggestions().then(suggestions => this.setState({ suggestions }));
  }

  render() {
    return (
      <div>
        <h1>Suggestions List</h1>

        <div className="container" style={{ marginBottom: 30 }}>
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 col-md-6">
              <ol className="list-group">
                {this.state.suggestions.map((suggestion, i) => (
                  <li key={i} className="list-group-item">
                    <Suggestion suggestion={suggestion} />
                  </li>
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
