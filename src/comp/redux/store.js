import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer';

const middeleware = [reduxThunk];
// if (condition) {

// }

const store = createStore(rootReducer, applyMiddleware(...middeleware));
export default store;