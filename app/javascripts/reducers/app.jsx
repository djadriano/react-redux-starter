// -----------------------------------------------------
// Define the state of Component
// -----------------------------------------------------

const appState = {
  initialized: false
};

// -----------------------------------------------------
// Subscribe the actions of component
// -----------------------------------------------------

const appReducer = (state = appState, action) => {
  let newState = Object.assign({}, state);

  switch( action.type ) {
    case 'START_APP':
      newState.initialized = true;
      return newState;

    default:
      return state;
  }
};

export default appReducer;
