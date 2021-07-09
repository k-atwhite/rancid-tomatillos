import React, { Component } from 'react';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
// import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [{id: 1, title: "1The Devil All The Time", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }, 
      {id: 2, title: "2The Devil All The Time", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" },
      ],
      chosenMovie: [],
    }
  }

  assignChosenMovie = (chosenMovie) => {
    // I have to click TWICE to change the state, WHY?
    this.setState({chosenMovie: [chosenMovie]})
    // console.log(this.state.chosenMovie)
  }

  // componentDidMount() {
  //   fetch('URL')
  //   .then(response => response.json())
  //   .then(movies => this.setState({movies: movies}))
  //   .catch(() => this.setState( {error: "something went wrong"}))
  // }

// toggleDetails = id => {
//   this.setState({displayMovieDetails: !this.state.displayMovieDetails, id: id})
// }
  
  render() { 
    return (
      <div className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
          <button 
            className="main-btn"
          >main</button>
        </nav>
        {!this.state.chosenMovie.length &&
          <Movies 
            movies={this.state.movies}
            assignChosenMovie={this.assignChosenMovie}
          />
        }
        {this.state.chosenMovie.length && 
          <MovieDetails 
            movies={this.state.movies}
            id={this.chosenMovie.id}
          />
        }
      </div>
    );
  }
}


export default App;
