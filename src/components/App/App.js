import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(movies => this.setState({movies: movies.movies}))
  .catch(() => this.setState( {error: "Something went wrong on our end, please try again later"}))
  }
  
  render() { 
    return (
      <main className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
          <NavLink to="/" className="main-btn">main</NavLink>
        </nav>

        {this.state.error && <h2>{this.state.error}</h2>}

        <Route 
          exact path='/' 
          render={() => {
            return (
              <Movies movies={this.state.movies}/>
            )
          }}
        />

        <Route 
          path='/:movieId' 
          render={ ({match}) => { 
            const displayedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.movieId))
            return <MovieDetails movies={this.state.movies} chosenMovie={displayedMovie} />
          }} 
        />
      </main>
    );
  }
}

export default App;
