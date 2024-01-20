// reducers/userReducer.js
const initialState = {
  data: [],
  loading: false,
  error: null,
  publicFile:[],
  token:null
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {...state, data: action.payload, loading: false, error: null}
      case 'CLEAR_USER':
        return null;
      case 'SET_AUTH':
        return {...state, token: action.payload, loading: false, error: null}
      default:
        return state;
    }
  };
  
  export default userReducer;
  