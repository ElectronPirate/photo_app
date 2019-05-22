import React from 'react';
import FavouritePhotos from '../components/FavouritePhotos';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    photos: state.photosData.filter((item) => {
      return item.liked
    })
  };
};

export default connect(mapStateToProps)(FavouritePhotos)
