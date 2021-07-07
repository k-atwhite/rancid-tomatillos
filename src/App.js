import React, { Component } from 'react';
import Movies from './Movies';
import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  // componentDidMount() {
  //   fetch('URL')
  //   .then(response => response.json())
  //   .then(movies => this.setState({movies: movies}))
  //   .catch(() => this.setState( {error: "something went wrong"}))
  // }
  
  render() { 
    return (
      <body className='app'>
        <nav className='navbar'>
          <h1 className='title'>Rancid Tomatillos</h1>
        </nav>
        <main>
            <Movies 
              movies={this.state.movies}
            />
        </main>
      </body>
    );
  }
}
 

export default App;
