import React from 'react';
import MovieCard from './MovieCard';
import './Movies.css';

const Movies = ({movies}) => {

    const moviePosters = movies.map(movie => {
        return (
            <MovieCard 
                movieObj={movie}
                poster={movie.poster_path}
                title={movie.title}
                backdrop={movie.backdrop_path}
                releaseDate={movie.release_date}
                overview={movie.overview}
                averageRating={movie.average_rating.toFixed(1)}
                genre={movie.genres}
                budget={movie.budget}
                revenue={movie.revenue}
                runtime={movie.runtime}
                tagline={movie.tagline}
                id={movie.id}
                key={movie.id}
            />
        )
    })

    return (
        <div className='all-movies'>
            {moviePosters}
        </div>
    )
}

export default Movies;