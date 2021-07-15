import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ poster, title, id }) => {
    return (
        <Link to={`/movies/${id}`}>
            <div className='card'>
                <img src={poster} alt={'movie poster'}></img>
                <h4>{title}</h4>
            </div>
        </Link>

    )
}

export default MovieCard;