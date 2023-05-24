import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import worksReducer from './works-reducer';
import servicesReducer from './services-reducer';
import loadingIndicatorsReducer from './lindicator-reducer';

const reducers = combineReducers({
    works: worksReducer,
    services: servicesReducer,
    indicators: loadingIndicatorsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;