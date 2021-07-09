import Movies from './Movies'


const MovieDetails = ({movies, id}) => {

    const displayedMovie = movies.find(movie => {
        return movie.id === id
    })
    return (
        <div className='MovieDetailsContainer'>
            <img src={displayedMovie.poster_path}></img>
            <h4>{displayedMovie.title}</h4>
            <p>{displayedMovie.backdrop_path}</p>
            <p>{displayedMovie.release_date}</p>
            <p>{displayedMovie.overview}</p>
            <p>{displayedMovie.average_rating}⭐</p>
            <p>{displayedMovie.genres}</p>
            {/* add commas */}
            <p>${displayedMovie.budget}</p>
            <p>${displayedMovie.revenue}</p>
            <p>{displayedMovie.runtime} m</p>
            <p>{displayedMovie.tagline}</p>
        </div>
    )
}

export default MovieDetails;