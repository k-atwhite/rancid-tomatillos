import React, { Component } from 'react';
import './Movie.css'

const Movie = ({ poster, title, averageRating, releaseDate, id }) => {
    return (
        <div className='card'>
            <img src={poster}></img>
            <h3>{title}</h3>
            <p>{averageRating}</p>
            <p>{releaseDate}</p>
        </div>
    )
}

export default Movie;