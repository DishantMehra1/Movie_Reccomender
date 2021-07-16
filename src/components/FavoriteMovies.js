import React from 'react'


const getImg = "https://image.tmdb.org/t/p/original/"


const FavoriteMovies = ({ favMovies, removeFavorite }) => {

  if (!favMovies.length) {
    return <h2 className="heading">Your favorite movies will appear here</h2>
  } else {
    return (
      <div className="movies" >
        {favMovies.length > 0 && favMovies.map((movie) => (
          <div key={movie.id} className="card" >
            <img src={getImg + movie.poster_path} alt={movie.title} />
            <h2>Movie: {movie.title} <span>{movie.vote_average}*</span></h2>
            <div className="buttons" >
              <button onClick={() => removeFavorite(movie)} className="btn" >Remove</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FavoriteMovies
