import React, { Component } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { getAllMovies } from "../../apiCalls";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: "",
      searchError: "",
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) => this.setState({ movies: movies.movies }))
      .catch(() =>
        this.setState({
          error: "Something went wrong on our end, please try again later",
        })
      );
  }

  filterMovies = (searchValue) => {
    let searchedMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.setState({ filteredMovies: searchedMovies }, () => {
      if (!searchedMovies.length) {
        this.setState({
          searchError:
            "We don't seem to have any movies matching that title...",
        });
      }
    });
  };

  clearFilteredMovies = () => {
    this.setState({ filteredMovies: [], searchError: "" });
  };

  chooseMovieData() {
    let displayedMovieData = this.state.filteredMovies.length
      ? this.state.filteredMovies
      : this.state.movies;
    return displayedMovieData;
  }
  render() {
    return (
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="header-button">
            <h1 className="title">Rancid Tomatillos</h1>
          </Link>
          <SearchBar
            className="searchbar"
            filterMovies={this.filterMovies}
            clearFilteredMovies={this.clearFilteredMovies}
          />
        </nav>
        <main className="main-content">
          {this.state.error && <h2>{this.state.error}</h2>}
          {!this.state.movies && (
            <h2 className="loading-message">🍿 Movies Loading 🍿</h2>
          )}
          {this.state.searchError && (
            <h2 className="error-message"> ${this.state.searchError}`</h2>
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Movies movies={this.chooseMovieData()} />;
              }}
            />
            <Route
              path="/movies/:movieId"
              render={({ match }) => {
                return <MovieDetails id={parseInt(match.params.movieId)} />;
              }}
            />
          </Switch>
          <Redirect to={"/"} />
        </main>
      </div>
    );
  }
}

export default App;
