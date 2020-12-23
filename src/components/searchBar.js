import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function SearchBar({handleSearch,ratingSearch}){
    return(
    <div>
     <input placeholder='Search movie...' onChange={handleSearch}></input>
     <div>
     <StarRatingComponent emptyStarColor={'grey'}  />
     </div>
    </div>
    )
};