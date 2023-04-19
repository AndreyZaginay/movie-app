import React from 'react'

const MovieInfo = ({ movie, animations }) => {

  if (!movie) {
    return <h1 style={{color: '#ffb92a', textAlign: 'center'}}>Enter the movie name</h1>
  }

  return (
        <div className={`movie-container ${animations}`}>
          {movie.Response === 'True'
          ? <div className={`movie-info ${animations}`}>
              <img src={movie.Poster} alt="" />
              <div>  
                <h1>{movie.Title}</h1>
                <p className='margin-top-15px'>Rating: {movie.imdbRating}</p>
                <p className='margin-top-15px'>Released: {movie.Released}</p>
                <p className='margin-top-15px'>Writer: {movie.Writer}</p>
                <p className='margin-top-15px'><b>Plot:</b> {movie.Plot}</p>
              </div>
            </div>
          : <h1 style={{color: '#ffb92a', textAlign: 'center'}}>{ movie.Error }</h1>
          }
        </div>
  )
}

export default MovieInfo