import {GET_IMAGES, GET_IMAGES_SUCCESS, ADD_TO_FAVORITE} from './actionConst'
export const getImages = () => {
  return ({
    type: GET_IMAGES
  })
};

export const getImagesSuccess = (images) => {
  return ({
    type: GET_IMAGES_SUCCESS,
    payload: images
  })
};

export const addToFavoriteSuccess = (image) => {
  return ({
    type: ADD_TO_FAVORITE,
    payload:image
  })
};