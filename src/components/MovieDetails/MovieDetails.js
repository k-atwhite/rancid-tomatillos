import React, { Component } from "react";
import { getChosenMovie } from "../../apiCalls";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedMovie: {},
      error: "",
    };
  }

  componentDidMount() {
    getChosenMovie(this.props.id)
      .then((movie) => this.setState({ displayedMovie: movie.movie }))
      .catch((error) =>
        this.setState({ error: `Unable to load Movie-${error}` })
      );
  }

  makeMoneyReadable(money) {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const dollarAmt = formatter.format(money);

    if (dollarAmt === "$0.00") {
      return "unavailable";
    } else {
      return dollarAmt;
    }
  }

  commaGenres(genres) {
    let genreList;
    if (genres) {
      genreList = genres.join(", ");
      return genreList;
    }
  }

  render() {
    if (this.state.error) {
      return <h2 className="error-message">{this.state.error}</h2>;
    }

    if (!this.state.error && !this.state.displayedMovie) {
      return <h2 className="loading-message">🍿 Movie Loading 🍿</h2>;
    }

    return (
      // <section className='details-card'>
      //     <div className='details-container'>
      //     <a href="background-img"style={{backgroundImage: `url(${this.state.displayedMovie.backdrop_path})`}}></a>
      //     <img src={this.state.displayedMovie.poster_path} alt={'movie poster'}></img>
      //     <h4 className='movie-title-rating'>{this.state.displayedMovie.title} {parseInt(this.state.displayedMovie.average_rating).toFixed(0)}/10⭐</h4>
      //     <div className='movie-detial-info-container'>
      //         <p className='tagline'>{this.state.displayedMovie.tagline}</p>
      //         <p className='release-date'>Release Date: {this.state.displayedMovie.release_date}</p>
      //         <p className='genres'>Genre: {this.commaGenres(this.state.displayedMovie.genres)}</p>
      //         <p className='overview'>{this.state.displayedMovie.overview}</p>
      //         <p className='runtime'>{this.state.displayedMovie.runtime} minutes</p>
      //         <p className='budget'>Budget: {this.makeMoneyReadable(this.state.displayedMovie.budget)}</p>
      //         <p className='revenue'>Revenue: {this.makeMoneyReadable(this.state.displayedMovie.revenue)}</p>
      //     </div>
      //     <NavLink to="/" className="main-btn">back to all movies</NavLink>
      //     </div>
      // </section>

      <div className=".movie-details-card">
        <div className="container">
          <img
            src={this.state.displayedMovie.poster_path}
            alt="moviePoster"
            className="cover"
          />
          <div
            className="hero"
            style={{
              backgroundImage: `url(${this.state.displayedMovie.backdrop_path})`,
            }}
          >
            <div className="details">
              <div className="title1">{this.state.displayedMovie.title}</div>
              <div className="title2">{this.state.displayedMovie.tagline}</div>
              <h4 className="movie-rating">
                {" "}
                {parseInt(this.state.displayedMovie.average_rating).toFixed(0)}
                /10⭐
              </h4>
              <p className="runtime">
                {this.state.displayedMovie.runtime} minutes
              </p>
            </div>
          </div>
          <div className="description">
            <div className="column1">
              <span className="tag">
                {this.commaGenres(this.state.displayedMovie.genres)}
              </span>
            </div>
            <div className="column2">
              <p>{this.state.displayedMovie.overview}</p>
              <p className="release-date">
                Release Date: {this.state.displayedMovie.release_date}
              </p>
              <p className="budget">
                Budget:{" "}
                {this.makeMoneyReadable(this.state.displayedMovie.budget)}
              </p>
              <p className="revenue">
                Revenue:{" "}
                {this.makeMoneyReadable(this.state.displayedMovie.revenue)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
