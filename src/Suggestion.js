import React, { Component } from "react";
import api from "./api";
import InterestsList from "./InterestsList";

class Suggestion extends Component {
  state = {
    showSearch: false,
    interests: []
  };

  searchInterests = e => {
    const searchTerm = e.target.value;

    this.setState({ searchTerm }, () => {
      api.getInterests(this.state.searchTerm).then(data => {
        this.setState({ interests: data });
      });
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9" style={{ wordWrap: "break-word" }}>
            {this.props.suggestion.name}
          </div>
          <div className="col-3 text-right" style={{ paddingLeft: 0 }}>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => {
                this.setState(
                  prevState => ({
                    showSearch: !prevState.showSearch
                  }),
                  () => {
                    if (this.state.showSearch) this.input.focus();
                  }
                );
              }}
            >
              {this.state.showSearch ? "Cancel" : "Remap"}
            </button>
          </div>
        </div>

        {this.state.showSearch && (
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-12">
              <input
                ref={input => {
                  this.input = input;
                }}
                onChange={this.searchInterests}
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
            </div>
            <InterestsList
              interests={this.state.interests}
              searchTerm={this.state.searchTerm}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Suggestion;
