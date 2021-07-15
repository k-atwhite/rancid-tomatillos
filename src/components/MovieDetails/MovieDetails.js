import React from 'react';

const MovieDetails = ({movies, chosenMovie, id}) => {
    const displayedMovie = movies.find(movie => {
        return movie === chosenMovie
    })
    return (
        <section className='card'>
            <img src={displayedMovie.poster_path} alt={'movie poster'}></img>
            <h4>{displayedMovie.title}</h4>
            {/* <p>{displayedMovie.backdrop_path}</p> */}
            {/* make date format, April 2, 2021 */}
            <p>{displayedMovie.release_date}</p>
            <p>{displayedMovie.overview}</p>
            <p>{displayedMovie.average_rating.toFixed(1)}⭐</p>
            {/* conditional formatting if there is no value */}
            <p>{displayedMovie.genres}</p>
            <p>{displayedMovie.budget}</p>
            <p>{displayedMovie.revenue}</p>
            <p>{displayedMovie.runtime}</p>
            <p>{displayedMovie.tagline}</p>
        </section>
    )
}

export default MovieDetails;