import React, { useState, useEffect } from 'react'

const getImg = "https://image.tmdb.org/t/p/original/"

const Details = ({ data }) => {
  const [movieId, setMovieId] = useState()
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&append_to_response=videos`)
      .then(res => res.json())
      .then((movieData) => {
        const result = movieData.videos.results[1].key
        const genreArray = movieData.genres
        setGenres(genreArray)
        setMovieId(result)
      })
  }, [data.id])


  return (
    <div className="details" >
      <div className="data" >
        <h3>Movie: {data.title}</h3>
        <h4>Language: {data.original_language}</h4>
        <h4>Rating: {data.vote_average}</h4>
        <h4>Release Date: {data.release_date}</h4>
        <h4>Genre: {genres.map((genre) => (
          <span key={genre.id} >{genre.name}, </span>
        ))}
        </h4>
        <h4>Adult Content: {data.adult ? 'Yes' : 'No'}</h4>
        <h4>Overview: </h4><p>{data.overview}</p>
        <a className="btn" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${movieId}`}>Preview</a>
      </div>
      <img src={getImg + data.poster_path} alt={data.title} />
    </div>
  )
}

export default Details
