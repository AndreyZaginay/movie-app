import React from 'react'

const MovieInfo = ({ movie }) => {

  if (!movie) {
    return <h1>Enter the movie name</h1>
  }

  return (
        <div>
          {movie.Response === 'True'
          ? <div>
            {movie.Title}
          </div>
          : <h1>Movie with that name doesn't exist</h1>
          }
        </div>
  )
}

export default MovieInfo