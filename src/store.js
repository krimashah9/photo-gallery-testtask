import createSagaMiddleware from "redux-saga";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import image from "./reducers/images";

import { watchFetchImages } from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    image
});

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(watchFetchImages);

export default store;
