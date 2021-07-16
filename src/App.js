import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'


import Navbar from "./components/Navbar"
import Movies from './components/Movies'
import FavoriteMovies from './components/FavoriteMovies'
import Details from './components/Details'


const API_KEY = '4e44d9029b1270a757cddc766a1bcb63'

const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState()
  const [moviesList, setMoviesList] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setIsLoaded(true)
        setMoviesList(data.results)
      }
      )
      .catch(err => setError(err))
  }, [])

  //******To save the movies in local storage so that even if we refresh the page data is not lost**********----->>>
  useEffect(() => {
    const moviesFav = JSON.parse(localStorage.getItem('favorites-movies'))
    setFavorites(moviesFav)
  }, [])

  const saveMoviesToLocalStorage = (movies) => {
    localStorage.setItem('favorites-movies', JSON.stringify(movies));
  }

  const addToFavorite = (movie) => {
    const newFavList = [...favorites, movie]
    setFavorites(newFavList)
    saveMoviesToLocalStorage(newFavList)
    alert(`${movie.title} successfully added to your favorites`)
  }

  const removeFavorite = (movie) => {
    const flag = window.confirm(`Do you want to remove ${movie.title} from favorites`)
    if (flag) {
      const newFavList = favorites.filter((fav) => fav.id !== movie.id)
      setFavorites(newFavList)
      saveMoviesToLocalStorage(newFavList)
    }
    else {
      return
    }
    // alert(``)
  }

  // ****** To get the details of the movie ******----->>>
  const showDetails = (movie) => {
    const movieData = movie
    setDetails(movieData);
  }


  if (!isLoaded) {
    return <h5>Loading.....</h5>
  } else if (error) {
    return <h5>{error}</h5>
  } else {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Movies moviesList={moviesList} addToFavorite={addToFavorite} showDetails={showDetails} />
          </Route>
          <Route exact path="/favorites" >
            <FavoriteMovies favMovies={favorites} removeFavorite={removeFavorite} />
          </Route>
          <Route>
            <Details exact path="/details" data={details} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;





