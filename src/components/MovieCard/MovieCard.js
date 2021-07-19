import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, title, id, averageRating }) => {
  return (
    <section className="entire-card">
      <Link to={`/movies/${id}`}>
        <img className="movie-card" src={poster} alt={"movie poster"}></img>
      </Link>
      <div className="title-rating">
        <p className="title">{title}</p>
        <p className="avg-rating">{averageRating}⭐</p>
      </div>
    </section>
  );
};

export default MovieCard;
