import React, { Component } from 'react';
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
        .catch(error => this.setState({error: 'Unable to load Movie'}))
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
        </section>
        )
    }
}

// {"movie":
// {"id":337401,"title":"Mulan","poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","release_date":"2020-09-04","overview":"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.","genres":["Action","Adventure","Drama","Fantasy"],"budget":200000000,"revenue":57000000,"runtime":115,"tagline":"","average_rating":5.2727272727272725}}



// const MovieDetails = ({movies, chosenMovie}) => {
//     const displayedMovie = movies.find(movie => {
//         return movie === chosenMovie
//     })
    // return (
    //     <section className='card'>
    //         <img src={displayedMovie.poster_path} alt={'movie poster'}></img>
    //         <h4 className='movie-title'>{displayedMovie.title}</h4>
    //         {/* <p>{displayedMovie.backdrop_path}</p> */}
    //         {/* make date format, April 2, 2021 */}
    //         <p className='release-date'>{displayedMovie.release_date}</p>
    //         <p className='overview'>{displayedMovie.overview}</p>
    //         <p className='average-rating'>{displayedMovie.average_rating.toFixed(1)}⭐</p>
    //         {/* conditional formatting if there is no value */}
    //         <p className='genres'>{displayedMovie.genres}</p>
    //         <p className='budget'>{displayedMovie.budget}</p>
    //         <p className='revenue'>{displayedMovie.revenue}</p>
    //         <p className='runtime'>{displayedMovie.runtime}</p>
    //         <p className='tagline'>{displayedMovie.tagline}</p>
    //     </section>
    // )
// }

export default MovieDetails;