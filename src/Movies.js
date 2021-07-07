import React from 'react';
import Movie from './Movie';
import './Movies.css';

const Movies = ({movies}) => {

    const moviePosters = movies.map(movie => {
        return (
            <Movie 
                title={movie.title}
                averageRating={movie.average_rating.toFixed(1)}
                releaseDate={movie.release_date}
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