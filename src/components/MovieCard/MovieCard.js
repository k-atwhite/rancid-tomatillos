import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ poster, title, id }) => {
    return (
        <div className='movie-card' style={{backgroundImage: `url(${poster})`}}>
            <Link to={`/movies/${id}`}>
                <img className="movie-poster" src={poster} alt={'movie poster'}></img>
                {/* <h4 className="movie-card-title">{title}</h4> */}
            </Link>
        </div>

    )
}

export default MovieCard;