import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import Trailer1 from '../comRouter/Trailer1';
import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";

const MovieCard = ({movie:{imgsrc,title,description,rate,trailer}}) => {
return (
 <div >
 <Card style={{ width:'15rem' }}>
  <Card.Img variant="top" src={imgsrc} />
  <Card.Body>
     <Card.Title>{title}</Card.Title>
     <Card.Text>
      {description}
     </Card.Text>
     <StarRatingComponent value={rate}/>
     <Card.Text>
      {trailer}
     </Card.Text>
  </Card.Body>
</Card>  

 </div>
);
}
 
export default MovieCard ;