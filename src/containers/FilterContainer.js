import React from 'react';
import CategorySelect from '../components/CategorySelect';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    photos: state.photosData.filter((item) => {
      return item.category
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (newCategory) => {
      dispatch({
        type: 'CATEGORY_SELECT',
        newCategory
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect)
