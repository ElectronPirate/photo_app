import React from 'react';
import './Photo.css';

const Photo = (props) => {
  const handleLikeClick = (event) => {
    props.likePhoto(props.index);
  }

  const {url, liked} = props.photosData;

  return (
    <div className='photo-card'>
      <img src={url} alt={url} id='photo'/>
      <button onClick={handleLikeClick}>Like</button>
    </div>
  )
}

export default Photo;
