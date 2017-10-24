import { combineReducers } from 'redux';
import authReducer from './authReducer';
// whate ever keys we put in here are given to the state object
export default combineReducers({
  // auth piece of state is provided by auth reducer
  // these keys are piece of state as reducer returs the state modified by the reducer
  auth: authReducer
});
