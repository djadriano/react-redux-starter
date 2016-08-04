// -----------------------------------------------------
// Redux Imports
// -----------------------------------------------------

import { combineReducers } from 'redux';

// -----------------------------------------------------
// Load Reducers
// -----------------------------------------------------

import appReducer from './app';

// -----------------------------------------------------
// Share reducers to application
// -----------------------------------------------------

const reducers = combineReducers({
  app: appReducer
});

export default reducers;
