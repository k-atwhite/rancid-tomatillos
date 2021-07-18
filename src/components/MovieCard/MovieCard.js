import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ poster, title, id }) => {
    return (
        <div className='movie-card' alt={`${title}`} style={{backgroundImage: `url(${poster})`}}>
            <Link to={`/movies/${id}`}>
                <img className="movie-poster" src={poster} alt={'movie poster'}></img>
            </Link>
        </div>

    )
}

export default MovieCard;