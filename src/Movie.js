import React, { Component } from 'react';
import './Movie.css'

const Movie = ({ poster, backdrop, title, averageRating, releaseDate }) => {
    return (
        <div>
            {/* <img>poster</img>
            <img>backdrop</img> */}
            <h3>{title}</h3>
            <p>{averageRating}</p>
             <p>{releaseDate}</p>
        </div>
    )
}

export default Movie;