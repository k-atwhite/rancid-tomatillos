import React, { Component } from 'react';
import './MovieCard.css'

const MovieCard = ({ poster, title, id, displayMovieDetails }) => {
    return (
        <div className='card'>
            <img src={poster}></img>
            <h4>{title}</h4>
            <button onClick={ () => displayMovieDetails(id)}>Click for details</button>
        </div>
    )
}

export default MovieCard;