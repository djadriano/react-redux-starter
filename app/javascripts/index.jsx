// ------------------------------------------------------
// NPM Imports
// ------------------------------------------------------

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// ------------------------------------------------------
// App Imports
// ------------------------------------------------------

import configureStore from './stores/configure';
import App from './containers/app';

// ------------------------------------------------------
// App Stylesheets
// ------------------------------------------------------

import AppStyle from '../stylesheets/app';

// ------------------------------------------------------
// Constants
// ------------------------------------------------------

const app   = document.getElementById('app');
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
