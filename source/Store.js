import React from 'react';

import {Platform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

// const middleware = applyMiddleware(promise, thunk);
const middleware = [thunk];
// const Store = createStore(RootReducer, applyMiddleware(...middleware));

const Store = createStore(rootReducer, applyMiddleware(...middleware));
export default Store;
