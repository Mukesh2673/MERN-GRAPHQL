// store.js

import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import {thunk} from 'redux-thunk';
import rootReducer from './Reducers'; // replace with your actual root reducer

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ),
);

export default store;
