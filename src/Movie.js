import React, { Component } from 'react';
import './Movie.css'

const Movie = ({ title, averageRating, releaseDate, id }) => {
    return (
        <div className='card'>
{/* ADD POSTER AND BACKDROP */}
            <h3>{title}</h3>
            <p>{averageRating}</p>
            <p>{releaseDate}</p>
        </div>
    )
}

export default Movie;