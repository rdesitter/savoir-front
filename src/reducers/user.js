import { CHANGE_VALUE, SET_ERROR, SET_USER } from '../actions';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
  birthday: '',
  error: false,
  errorMsg: '',
  posts: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        error: false,
        [action.key]: action.value,
      };
    case SET_USER:
      return {
        ...state,
        username: action.username,
        logged: true,
        password: '',
        error: false,
        errorMsg: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};

export default reducer;
