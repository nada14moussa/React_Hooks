import React,{useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.css'
import ModalComp from './components/ModalComp';
import {movies} from './components/Movies';
import SearchBar from './components/searchBar';
//second commit here
function App() {
  const [movieList, setMovieList] = useState(movies);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

  const [searchWord, setSearchWord] = useState('');
  /*const [ratingSearch, setRatingSearch] = useState(0); */
  const handleSearch = (e) => setSearchWord(e.target.value);

  return (
    <div className="App">
    <h1 className='titre'>Movie Application</h1>
     <SearchBar handleSearch={handleSearch} />
     <ModalComp handleAdd={addMovie}/>
     <MovieList moviesArray={
        searchWord? movieList.filter((movie)=>movie.title.toLowerCase().includes(searchWord.toLocaleLowerCase()))
        :movieList}/>   
    </div>
  );
}

export default App;
