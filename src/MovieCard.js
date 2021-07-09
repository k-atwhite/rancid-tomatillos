import React from 'react';
import './MovieCard.css'

const MovieCard = ({ poster, title, assignChosenMovie, movieObj }) => {
    return (
        <div className='card'>
            <img src={poster} alt={'movie poster'}></img>
            <h4>{title}</h4>
            <button onClick = { () => assignChosenMovie(movieObj)}>🎥</button>
        </div>
    )
}

export default MovieCard;