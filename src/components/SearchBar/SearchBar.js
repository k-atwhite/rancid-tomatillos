import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
    };
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
    this.props.filterMovies(this.state.searchValue);
  };

  clearSearchValue = (event) => {
    this.setState({ searchValue: "" });
    this.props.clearFilteredMovies();
  };

  render() {
    return (
      <div className="form-wrapper">
        <form>
          <input
            className="input"
            type="text"
            id="movie-search"
            placeholder="search movies"
            name="searchValue"
            value={this.state.searchValue}
            onChange={(event) => this.handleSearch(event)}
            onFocus={(event) => this.clearSearchValue(event)}
          />
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={(event) => this.clearSearchValue(event)}
          ></i>
        </form>
      </div>
    );
  }
}

export default SearchBar;
