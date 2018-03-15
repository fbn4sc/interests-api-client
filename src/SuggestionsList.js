import React, { Component } from "react";
import App from "./App";
import Suggestion from "./Suggestion";
import api from "./api";
import debounce from "debounce";

class SuggestionsList extends Component {
  state = { suggestions: [], page: 0, reachedLastPage: false };

  componentDidMount() {
    const apiHost = process.env.REACT_APP_API_HOST;
    api
      .getSuggestions(this.state.page)
      .then(suggestions => this.setState({ suggestions, page: 1 }));

    document.addEventListener("scroll", debounce(this.loadMore, 800));
  }

  fetchSuggestions = (page = 0) => {
    return api.getSuggestions(page).then(suggestions => suggestions);
  };

  loadMore = async () => {
    const bottom =
      this.list.getBoundingClientRect().bottom <= window.innerHeight;

    if (bottom && !this.state.reachedLastPage) {
      const newSuggestions = await this.fetchSuggestions(this.state.page);

      this.setState(prevState => {
        const suggestions = [...prevState.suggestions, ...newSuggestions];
        return {
          suggestions,
          page: prevState.page + 1,
          reachedLastPage: !(newSuggestions.length === 30)
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Suggestions List</h1>

        <div
          className="container"
          style={{ marginBottom: 30 }}
          onScroll={e => console.log("scroll")}
        >
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 col-md-6">
              <ol className="list-group" ref={list => (this.list = list)}>
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
