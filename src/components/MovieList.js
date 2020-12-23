import React from 'react';
import MovieCard from './MovieCard';
import {movies} from './Movies';

const MovieList = ({moviesArray}) => {
    
 return (
  <div className='list'>
  {moviesArray.map((movie,key)=>
  <MovieCard movie={movie} key={key}/>
  )}
  </div>
 );
}
 
export default MovieList ;