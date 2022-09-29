import {
  CHANGE_VALUE, INIT_ERROR, INIT_INFO, SENT_MSG, SET_ERROR, SET_USER,
} from '../actions';

export const initialState = {
  userId: '',
  logged: false,
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
  avatar: '',
  birthday: '',
  birthdate: '',
  error: false,
  errorMsg: '',
  posts: [],
  message: '',
  created_at: '',
  about: '',
  info: {
    isDisplayed: false,
    msg: '',
  },
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
    case INIT_ERROR:
      return {
        ...state,
        error: false,
        errorMsg: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.errorMsg,
      };
    case SENT_MSG:
      return {
        ...state,
        info: {
          isDisplayed: true,
          msg: 'Merci, votre message a bien été envoyé. Nous vous contacterons dans les plus brefs délais.',
        },
      };
    case INIT_INFO:
      return {
        ...state,
        info: {
          isDisplayed: false,
          msg: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
