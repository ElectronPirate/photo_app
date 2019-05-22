import photosData from '../data/photos_data'

const photosReducer = (state = {photosData: photosData, orderBy: null}, action) => {
  switch (action.type) {
    case 'LIKE_PHOTO':
      const newState = {...state}
      newState.photosData[action.photoIndex] = { ...newState.photosData[action.photoIndex] }
      newState.photosData[action.photoIndex].liked = true
      return newState
    case 'CATEGORY_SELECT':
      const newState2 = {...state}
      newState2.orderBy = action.category
      return newState2
    default:
    return state
  };
};

export default photosReducer;
