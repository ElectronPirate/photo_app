import React from 'react';
import Photo from './Photo';
import './Photos.css';

const Photos = (props) => {

  const photoList = props.photos.map((photosData, index) => {
    return <Photo
      photosData={photosData}
      key={index}
      index={index}
      likePhoto={props.likePhoto}
    />
  });

  return(
    <div id='photos-list'>
      {photoList}
    </div>
  )
}

export default Photos;
