import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import Loader from './UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching';
import MovieService from '../API/MovieService';
import MovieInfo from './MovieInfo';

const Movie = () => {

  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState(null);

  const [fetchMovie, isMovieLoading, movieError] = useFetching ( async () => {
      if (!title) {
        return; 
      }
      const response = await MovieService.getMovieByTitle(title);
      setMovie(response.data);
      console.log(response);
      setTitle('');
  })

  return (
    <div className='movie'>
         <div className='search'>
            <MyInput 
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" 
              placeholder="Enter a movie name"
            />
            <MyButton onClick={fetchMovie}>
              Search
            </MyButton>
          </div>
          {movieError && 
          <h1>Error: ${movieError}</h1>
          }
          {isMovieLoading 
            ? <Loader/> 
            : <MovieInfo animations={'animation-test'} movie={movie}/>
          }
    </div>  
  )
}

export default Movie