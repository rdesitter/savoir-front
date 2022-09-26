import { CHANGE_VALUE, SET_ERROR, SET_USER } from '../actions';

export const initialState = {
  logged: false,
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
  avatar: '',
  birthday: '',
  error: false,
  errorMsg: '',
  posts: [],
  message: '',
  created_at: '',
  about: '',
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
        ...action,
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
