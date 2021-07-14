import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';


const MovieCard = ({ poster, title, id }) => {
    return (
        <div className='card'>
            <Link to={`/${id}`}>
                <img src={poster} alt={'movie poster'}></img>
                <h4>{title}</h4>
            </Link>
        </div>
    )
}

export default MovieCard;