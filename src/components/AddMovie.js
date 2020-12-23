/*import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import ModalComp from './ModalComp';
import MovieCard from './MovieCard';

const AddMovie = ({handleAdd}) => {
 const [show,setShow]=useState(false);
 const toggleShow=()=> setShow(!show);
 return ( 
 <div>
 <Button variant="warning" onClick={()=>setShow(true)} > Add movie </Button>
{show && <ModalComp isOpen={show} toggle={toggleShow} handleAdd={handleAdd}/>}
 </div>
  );
}
 
export default AddMovie;*/