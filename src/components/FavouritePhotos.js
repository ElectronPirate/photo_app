import React from 'react';
import FavouritePhoto from './FavouritePhoto';
import './FavouritePhotos.css';

const FavouritePhotos = (props) => {

  const photoList = props.photos.map((photosData, index) => {
    return <FavouritePhoto
      photosData={photosData}
      key={index}
      index={index}

    />
  });

  return(
    <div id='photos-list'>
      {photoList}
    </div>
  )
}

export default FavouritePhotos;
