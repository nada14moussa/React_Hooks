import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";
export const movies=[
    {imgsrc:'/img1.jpg',title:'Harry Potter',description:'description of the movie',rate:3,trailer:<Link to='/trailer1'>Watch Trailer 1</Link>},
    {imgsrc:'/img2.jpg',title:'Joker',description:'description of the movie',rate:4,trailer:<Link to='/trailer2'>Watch Trailer 2</Link>},
    {imgsrc:'/img3.jpg',title:'Malificent',description:'description of the movie',rate:5,trailer:<Link to='/trailer3'>Watch Trailer 3</Link>}
  ];