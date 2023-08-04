import { LOGIN, SIGNUP } from "../action/type";

// Initial state
const initialState = {
  isauth : true
};

// Reducer
const collections = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, signin: action.payload};
      case SIGNUP:
      return { ...state, signUpResponse: action.payload};
    default:
      return state;
  }
};

export default collections;