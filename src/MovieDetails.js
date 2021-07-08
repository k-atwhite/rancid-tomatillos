import Movies from './Movies'


const MovieDetails = ({poster, title, backdrop, releaseDate, overview, averageRating, genre, budget, revenue, runtime, tagline, id}) => {


    return (
        <div>
            <img src={poster}></img>
            <h4>{title}</h4>
            <p>{backdrop}</p>
            <p>{releaseDate}</p>
            <p>{overview}</p>
            <p>{averageRating}</p>
            <p>{genre}</p>
            {/* add commas */}
            <p>${budget}</p>
            <p>{runtime} m</p>
            <p>{tagline}</p>
        </div>
    )
}

export default MovieDetails;