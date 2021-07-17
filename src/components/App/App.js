import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { Route } from 'react-router-dom';
import { getAllMovies } from '../../apiCalls';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(movies => this.setState({movies: movies.movies}))
    .catch(() => this.setState( {error: "Something went wrong on our end, please try again later"}))
  }

  filterMovies = (searchValue) => {
    let searchedMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchValue))
    this.setState( {filteredMovies: searchedMovies})
  }

  clearFilteredMovies = () => {
    this.setState( {filteredMovies: []} )
  }
  
  render() { 
    return (
      <main className='app'>
        {/* <Switch> */}
          <nav className='navbar'>
            <h1 className='title'>Rancid Tomatillos</h1>
            <SearchBar className='searchBar' filterMovies={this.filterMovies} clearFilteredMovies={this.clearFilteredMovies}/>
          </nav>

        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.movies && <h2 className='loading-message'>🍿 Movies Loading 🍿</h2>}

        <Route 
          exact path='/' 
          render={() => {
            // console.log(this.state.movies, "movies")
            // console.log(this.state.filteredMovies, "filtered movies")

            let displayedMovieData = this.state.filteredMovies.length ? this.state.filteredMovies : this.state.movies
            return (
              <Movies movies={displayedMovieData}/>
            )
          }}
        />
{/* {this.state.filteredMovies && <Movies movies={this.state.filteredMovies} />} */}
{/*  Make a div thats just for your searched movies while showing everything else? */}
{/* But search is still visible after clicking a chosen movie */}
        <Route 
          path='/movies/:movieId' 
          render={ ({match}) => { 
            return <MovieDetails id={parseInt(match.params.movieId)} />
          }} 
        />
        {/* </Switch> */}
      </main>
    );
  }
}

export default App;
