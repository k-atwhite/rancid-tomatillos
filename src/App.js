import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

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
          <div className='allMovies'>
          </div>
        </main>
      </body>
    );
  }
}
 

export default App;
