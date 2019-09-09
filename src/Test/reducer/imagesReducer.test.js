import ImageReducer from "../../reducers/images";
import {ADD_TO_FAVORITE, GET_IMAGES, GET_IMAGES_SUCCESS} from "../../actions/actionConst";

const mockImages = [{
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
},
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  }]
let INTIAL_STATE = {
  images: [],
  favoriteList: []
}

describe("Image Reducer", () => {
  it("should return the initial state", () => {
    expect(ImageReducer(undefined, {type: "", payload: ""})).toEqual({
      ...INTIAL_STATE
    });
  });

  it("should handle GET_IMAGES", () => {
    expect(
      ImageReducer(INTIAL_STATE, {type: GET_IMAGES})).toEqual({
      ...INTIAL_STATE
    });

    expect(
      ImageReducer(INTIAL_STATE, {
        type: GET_IMAGES_SUCCESS,
        payload: mockImages
      })
    ).toEqual({
      ...INTIAL_STATE,
      images: mockImages
    });
  });

  it("should handle ADD_TO_FAVORITE", () => {
    console.log('asd : ', {
      ...INTIAL_STATE,
      images: [],
      favoriteList: mockImages
    })
    expect(
      ImageReducer(INTIAL_STATE, {
        type: ADD_TO_FAVORITE,
        payload: mockImages
      })
    ).toEqual({
      ...INTIAL_STATE,
      images: [],
      favoriteList: [mockImages]
    });
  });
});