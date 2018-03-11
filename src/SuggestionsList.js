import React, { Component } from "react";
import axios from "axios";
import App from "./App";
import Suggestion from "./Suggestion";

class SuggestionsList extends Component {
  state = { suggestions: [] };

  componentDidMount() {
    const apiHost = process.env.REACT_APP_API_HOST;

    axios
      .get(`${apiHost}/suggestions`)
      .then(response => this.setState({ suggestions: response.data }))
      .catch(error => console.error(error));
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
