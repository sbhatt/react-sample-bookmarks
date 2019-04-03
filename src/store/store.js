import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./reducers";
// Logger with default options
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
