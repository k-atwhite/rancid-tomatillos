import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      chosenMovie: null,
      error: ''
    }
  }

  componentDidMount() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(movies => this.setState({movies: movies.movies}))
  .catch(() => this.setState( {error: "Something went wrong on our end, please try again later"}))
  }

  assignChosenMovie = (chosenMovie) => {
    this.setState({chosenMovie: chosenMovie})
  }

  returnToMain = () => {
    this.setState({chosenMovie: null})
  }
  
  render() { 
    return (
      <div className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
          <button 
            className="main-btn"
            onClick = { () => this.returnToMain()}
          >main</button>
        </nav>
        {this.state.error && <h2>{this.state.error}</h2>}
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
