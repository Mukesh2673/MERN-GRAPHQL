import {  combineReducers } from 'redux';
import publicFileReducer from './publicFileReducer'
import userReducer from './userReducer';
const rootReducer = combineReducers({
    publicFile: publicFileReducer,
    user: userReducer,
    // Add other reducers here as needed
  });
export default rootReducer  