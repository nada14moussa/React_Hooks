import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie:{imgsrc,title,description,rate}}) => {
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
  </Card.Body>
</Card>  )

 </div>
);
}
 
export default MovieCard ;