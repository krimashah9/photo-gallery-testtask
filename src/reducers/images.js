import {ADD_TO_FAVORITE, GET_IMAGES, GET_IMAGES_SUCCESS, GET_IMAGES_FAILED} from "../actions/actionConst";

const INTIAL_STATE = {
  images: [],
  favoriteList: []
}

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGES : {
      return {
        ...state
      }
    }
      break;
    case GET_IMAGES_SUCCESS : {
      return {
        ...state,
        images: action.payload
      }
    }
      break;
    case GET_IMAGES_FAILED : {
      return {
        ...state,
        images: []
      }
    }
      break;
    case ADD_TO_FAVORITE : {
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload]
      }
    }
      break;
    default:
      return state;
  }
}

