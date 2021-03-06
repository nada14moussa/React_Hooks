import React,{useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.css'
import ModalComp from './components/ModalComp';
import {movies} from './components/Movies';
import SearchBar from './components/searchBar';
import Trailer1 from './comRouter/Trailer1';
import Trailer2 from './comRouter/Trailer2';
import Trailer3 from './comRouter/Trailer3';
import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";
import Home from './Home';

function App() {
  const [movieList, setMovieList] = useState(movies);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

  const [searchWord, setSearchWord] = useState('');
  /*const [ratingSearch, setRatingSearch] = useState(0); */
  const handleSearch = (e) => setSearchWord(e.target.value);

  return (
    <div className="App">
   
     <Router>
       
       
         
         <Route path='/trailer1'exact strict><Trailer1/></Route>
         <Route path='/trailer2'exact strict><Trailer2/></Route>
         <Route path='/trailer3'exact strict><Trailer3/></Route>
         <Route path='/'exact strict><Home/></Route>
        
     </Router>
    </div>
  );
}

export default App;
