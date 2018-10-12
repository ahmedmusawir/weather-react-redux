import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

const initialState = {};

const middleware = [reduxPromise];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;
