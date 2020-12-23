import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";

export default function Trailer2(){
    return(
     <div className='trailer'>
       <iframe  src="https://www.youtube.com/embed/zAGVQLHvwOY"> </iframe>
       <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
       <Link to='/' >Rturn to Home</Link>
     </div>
    )
}