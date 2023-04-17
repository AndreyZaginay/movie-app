import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
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
        <MovieInfo/>
    </div>  
  )
}

export default Movie