// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component } from 'react';

// --------------------------------------------------------------------
// Define Component
// --------------------------------------------------------------------

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialized();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Is loaded: {`${this.props.loaded.toString()}`}</h1>
      </div>
    );
  }
}
