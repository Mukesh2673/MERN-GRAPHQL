// actions.js
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const setUser = (user) => {
    return {
      type: 'SET_USER',
      payload: user,
    };
  };
  
  export const clearUser = () => {
    return {
      type: 'CLEAR_USER',
    };
  };
  
  // Thunk example
  export const asyncSetUser = (user) => {
    return (dispatch) => {
      // Perform async operations, such as fetching data from an API
      // Once complete, dispatch a regular action to update the state
      dispatch(setUser(user));
    };
  };
  