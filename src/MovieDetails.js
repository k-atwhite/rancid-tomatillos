import React from 'react';
// import Movies from './Movies'


const MovieDetails = ({movies, chosenMovie}) => {
    console.log(chosenMovie, "title")
    console.log(chosenMovie.id, "chosenMovie ID")
    console.log(movies, "all movies")
    const displayedMovie = movies.find(movie => {
        return movie.id === chosenMovie.id
    })
    return (
        <div className='card'>
            <img src={displayedMovie.poster_path} alt={'movie poster'}></img>
            <h4>{displayedMovie.title}</h4>
            <p>{displayedMovie.backdrop_path}</p>
            <p>{displayedMovie.release_date}</p>
            <p>{displayedMovie.overview}</p>
            <p>{displayedMovie.average_rating}⭐</p>
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