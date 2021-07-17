import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getChosenMovie } from '../../apiCalls';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
            this.state = {
                displayedMovie: {},
                error: ''
            }
    }

    componentDidMount() {
        getChosenMovie(this.props.id)
        .then(movie => this.setState({displayedMovie: movie.movie}))
        .catch(error => this.setState({error: `Unable to load Movie-${error}`}))
    }

    render() {
        if (this.state.error) {
            return <h2 className="error-message">{this.state.error}</h2>
        }

        if (!this.state.error && !this.state.displayedMovie) {
            return <h2 className="loading-message">🍿 Movie Loading 🍿</h2>
        }
        
        return(
        <section className='card' style={{backgroundImage: `url(${this.state.displayedMovie.backdrop_path})`}}>
            <img src={this.state.displayedMovie.poster_path} alt={'movie poster'}></img>
            <h4 className='movie-title'>{this.state.displayedMovie.title}</h4>
            <p className='release-date'>{this.state.displayedMovie.release_date}</p>
            <p className='overview'>{this.state.displayedMovie.overview}</p>
            <p className='average-rating'>{parseInt(this.state.displayedMovie.average_rating).toFixed(1)}⭐</p>
            {/* conditional formatting if there is no value? */}
            <p className='genres'>{this.state.displayedMovie.genres}</p>
            <p className='budget'>{this.state.displayedMovie.budget}</p>
            <p className='revenue'>{this.state.displayedMovie.revenue}</p>
            <p className='runtime'>{this.state.displayedMovie.runtime}</p>
            <p className='tagline'>{this.state.displayedMovie.tagline}</p>
            <NavLink to="/" className="main-btn">back to all movies</NavLink>

        </section>
        )
    }
}

export default MovieDetails;