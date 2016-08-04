// ------------------------------------------------------
// Define Actions
// ------------------------------------------------------

export function start() {
  return { type: 'START_APP' };
}

// ------------------------------------------------------
// Below example of No Pure Actions
// ------------------------------------------------------

export function foo() {
  return (dispatch, getState) => {

  }
}
