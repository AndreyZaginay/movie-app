import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const Search = () => {
  return (
    <div className='search'>
        <MyInput/>
        <MyButton>
            Search
        </MyButton>
    </div>
  )
}

export default Search