import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import { getAllMovies } from '../../apiCalls';
import SearchBar from '../SearchBar/SearchBar';

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

  filterMovies(searchCriteria) {
    this.state.movies.filter(movie => movie.name.includes())
  }
  
  render() { 
    return (
      <main className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
          <NavLink to="/" className="main-btn">main</NavLink>
          <SearchBar />
        </nav>
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.movies && <h2 className='loading-message'>🍿 Movies Loading 🍿</h2>}
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
            return <MovieDetails id={parseInt(match.params.movieId)} />
          }} 
        />
      </main>
    );
  }
}

export default App;
