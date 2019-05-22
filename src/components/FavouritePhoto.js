import React from 'react';
import './FavouritePhoto.css';

const FavouritePhoto = (props) => {

  const {url} = props.photosData;

  return (
    <div className='photo-card'>
      <img src={url} alt={url} id='photo'/>
    </div>
  )
}

export default FavouritePhoto;
