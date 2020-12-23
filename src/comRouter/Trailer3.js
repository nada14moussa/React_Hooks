import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link } 
from "react-router-dom";

export default function Trailer3(){
    return(
     <div className='trailer'>
       <iframe  src="https://www.youtube.com/embed/JIIgXEGAZgE"> </iframe>
       <p>Maleficent is a powerful fairy living in the Moors, a magical forest realm bordering a human kingdom. As a young girl, Maleficent meets and falls in love with a human peasant boy named Stefan.His love is overshadowed by ambition, and as they grow older, the two grow apart and Maleficent becomes protector of the Moors.</p>
       <Link to='/' >Return to Home</Link>
     </div>
    )
}