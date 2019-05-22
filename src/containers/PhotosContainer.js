import React from 'react';
import Photos from '../components/Photos';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    photos: state.photosData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likePhoto: (photoIndex) => {
      dispatch({
        type: 'LIKE_PHOTO',
        photoIndex
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
