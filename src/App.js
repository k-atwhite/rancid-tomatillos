import React, { Component } from 'react';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      chosenMovie: null,
    }
  }

  componentDidMount() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(movies => this.setState({movies: movies.movies}))
  .catch(() => this.setState( {error: "something went wrong"}))
  }

  assignChosenMovie = (chosenMovie) => {
    this.setState({chosenMovie: chosenMovie})
  }
  
  render() { 
    return (
      <div className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
          <button 
            className="main-btn"
          >main</button>
        </nav>
        {!this.state.chosenMovie &&
          <Movies 
            movies={this.state.movies}
            assignChosenMovie={this.assignChosenMovie}
          />
         } 
        {this.state.chosenMovie && 
          <MovieDetails 
            movies={this.state.movies}
            chosenMovie={this.state.chosenMovie}
          />
        } 
      </div>
    );
  }
}


export default App;
