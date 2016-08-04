// ------------------------------------------------------
// Redux Imports
// ------------------------------------------------------

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// ------------------------------------------------------
// Reducers Imports
// ------------------------------------------------------

import reducers from '../reducers/index';

// ------------------------------------------------------
// Create Redux Logger Middleware to show
// the actions on Console of Developer Tools
// ------------------------------------------------------

const loggerMiddleware = createLogger();

// ------------------------------------------------------
// Export Store Configuration
// ------------------------------------------------------

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
