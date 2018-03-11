import React, { Component } from "react";
import axios from "axios";
import App from "./App";

class SuggestionsList extends Component {
  state = { suggestions: [] };

  componentDidMount() {
    const apiHost =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://interests-api.herokuapp.com/";

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
                    <div className="row">
                      <div className="col-9" style={{ wordWrap: "break-word" }}>
                        {suggestion.name}
                      </div>
                      <div
                        className="col-3 text-right"
                        style={{ paddingLeft: 0 }}
                      >
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={() => console.log(suggestion.name)}
                        >
                          Remap
                        </button>
                      </div>
                    </div>
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
