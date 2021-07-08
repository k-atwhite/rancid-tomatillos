import React, { Component } from 'react';
import './MovieCard.css'

const MovieCard = ({ poster, title }) => {
    return (
        <div 
            className='card'
            // onClick={() => showMovieDetails(id)}
        >
            <img src={poster}></img>
            <h3>{title}</h3>
        </div>
    )
}

export default MovieCard;