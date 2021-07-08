import React, { Component } from 'react';
import './Movie.css'

const Movie = ({ poster, title, backdrop, releaseDate, overview, averageRating, genre, budget, revenue, runtime, tagline, id }) => {
    return (
        <div className='card'>
            <img src={poster}></img>
            <h3>{title}</h3>
            <p>{backdrop}</p>
            <p>{releaseDate}</p>
            <p>{overview}</p>
            <p>{averageRating}</p>
            <p>{genre}</p>
            add commas
            <p>${budget}</p>
            <p>{runtime} m</p>
            <p>{tagline}</p>
        </div>
    )
}

export default Movie;