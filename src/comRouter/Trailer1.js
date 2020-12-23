import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";

export default function Trailer1(){
    return(
     <div className='trailer'>
       <iframe  src="https://www.youtube.com/embed/1bq0qff4iF8"> </iframe>
       <p>Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort.</p>
       <Link to='/' >Return to Home</Link>
     </div>
    )
}