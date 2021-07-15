import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import { getAllMovies } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
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
          path='/movies/:movieId' 
          render={ ({match}) => { 
            const chosenMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.movieId))
            return <MovieDetails movies={this.state.movies} chosenMovie={chosenMovie} />
          }} 
        />
      </main>
    );
  }
}

export default App;
