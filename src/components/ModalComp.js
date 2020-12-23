import React,{useState} from 'react';
import {Modal ,Button} from 'react-bootstrap';
import {movies} from './Movies';

const ModalComp = ({handleAdd}) => {

 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 
 /*const [movieList, setMovieList] = useState(movies);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);*/

 const [newMovie, setNewMovie] = useState({
    title: ``,
    description: ``,
    imgsrc: ``,
    rate: 0,
  });
 const onChangeHandler = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
 const handleClick = (e) => {
     e.preventDefault();
    handleAdd(newMovie); };

 return (
    <div>
 <Button variant="warning" onClick={handleShow}>
  Click to add new movie
 </Button>
 <Modal show={show} onHide={handleClose} >
 <Modal.Header closeButton>
 <Modal.Title>Add new movie</Modal.Title>
 </Modal.Header>
 <Modal.Body>
    <div className='mod' >
        <div className='label'>
            <label className="input" >Title :  </label>
            <input type="text" name="title"  onChange={onChangeHandler} />
        </div>
        <div className='label'>
            <label className="input">Image:</label>
            <input type="text" name="imgsrc"  onChange={onChangeHandler} />
        </div>
        <div className='label'>
            <label className="input">Description :</label>
            <input type="text" name="description"  onChange={onChangeHandler}  />
        </div>
        <div className='label'>
            <label className="input">Rating:</label>
            <input type="text" name="rate"  onChange={onChangeHandler} />
        </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={(e) => {
    handleClick(e); handleClose();}} >Save changes</Button>
  </Modal.Footer>
</Modal>  
  </div>  
  );
}
 
export default ModalComp;