import React from 'react'
import { NavLink } from 'react-router-dom'


const getImg = "https://image.tmdb.org/t/p/original/"

const Movies = ({ moviesList, addToFavorite, showDetails }) => {

  return (
    <>
      <h1>Most Popular Movies Right Now</h1>
      <div className="movies" >
        {moviesList.length > 0 && moviesList.map((movie) => (
          <div key={movie.id} className="card" >
            <img src={getImg + movie.poster_path} alt={movie.title} />
            <h2>{movie.title} <span>{movie.vote_average} <i className="fas fa-star"></i></span></h2>
            <div className="buttons" >
              <NavLink className="btn" to="/details" onClick={() => showDetails(movie)} >Details</NavLink>
              <button onClick={() => addToFavorite(movie)} className="btn" >Add to favorite</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movies
