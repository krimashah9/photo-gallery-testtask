import api from "../../src/api";
import {GET_IMAGES} from '../actions/actionConst'

import * as photoAction from "../actions/images";

import { takeEvery, put } from "redux-saga/effects";

function* getImagesSaga() {
    const response = yield api.photo.getImagesApi();
    if (response) {
        yield put(photoAction.getImagesSuccess(response.data));
    }
}

export function* watchFetchImages() {
    yield takeEvery(GET_IMAGES, getImagesSaga);
}
