import React from 'react';
import { Link } from 'react-router-dom'


const MovieDetails = ({movies, chosenMovie}) => {
    const displayedMovie = movies.find(movie => {
        return movie === chosenMovie
    })
        {console.log(displayedMovie.poster_path)}
    return (
        <div className='card'>
            <img src={displayedMovie.poster_path} alt={'movie poster'}></img>
            <h4>{displayedMovie.title}</h4>
            <p>{displayedMovie.backdrop_path}</p>
            <p>{displayedMovie.release_date}</p>
            <p>{displayedMovie.overview}</p>
            <p>{displayedMovie.average_rating.toFixed(2)}⭐</p>
            <p>{displayedMovie.genres}</p>
            {/* add commas */}
            <p>${displayedMovie.budget}</p>
            <p>${displayedMovie.revenue}</p>
            <p>{displayedMovie.runtime} m</p>
            <p>{displayedMovie.tagline}</p>
        </div>
    )
}

export default MovieDetails;