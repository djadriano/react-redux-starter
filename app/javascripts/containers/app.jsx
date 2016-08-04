// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// --------------------------------------------------------------------
// Load Actions
// --------------------------------------------------------------------

import { appActions } from '../actions/index';

// --------------------------------------------------------------------
// Load Component
// --------------------------------------------------------------------

import AppComponent from '../components/app';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

export default class App extends Component {
  render() {
    return (
      <AppComponent />
    )
  }
}

// --------------------------------------------------------------------
// Get the states of all reducers and share into your component
// --------------------------------------------------------------------

function mapStateToProps(state) {
  return {
    loaded: state.app.initialized
  };
}

// --------------------------------------------------------------------
// Register the actions to components
// --------------------------------------------------------------------

const mapDispatchToProps = (dispatch) => {
  return {
    initialized: () => dispatch(appActions.start())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

