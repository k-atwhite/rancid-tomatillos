import React, { Component } from 'react';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [{"id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"},{"id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"},{"id":718444,"poster_path":"https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg","title":"Rogue","average_rating":7,"release_date":"2020-08-20"},{"id":539885,"poster_path":"https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg","title":"Ava","average_rating":5.142857142857143,"release_date":"2020-07-02"},{"id":581392,"poster_path":"https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg","title":"Peninsula","average_rating":7.6,"release_date":"2020-07-15"}],
      chosenMovie: null,
    }
  }

  // componentDidMount() {
  // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  // .then(response => response.json())
  // .then(movies => this.setState({movies: movies.movies}))
  // .catch(() => this.setState( {error: "something went wrong"}))
  // }

  assignChosenMovie = (chosenMovie) => {
    this.setState({chosenMovie: [chosenMovie]})
    console.log(chosenMovie.id, "chosen id")
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
