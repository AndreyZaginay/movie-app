import React, { useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MovieService from '../API/MovieService';

const Search = ({ callback }) => {

    const [title, setTitle] = useState('');

    // const findMovie = () => {
    //   const response = MovieService.getMovieByTitle(title);
        
    // }
    
    const [fetchMovie, isPostsLoading, postError] = useFetching ( async () => {
        const response = await MovieService.getMovieByTitle(title);
        console.log(response);
    })

  return (
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
  )
}

export default Search