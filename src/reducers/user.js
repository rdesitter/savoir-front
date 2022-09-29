import {
  CHANGE_VALUE, INIT_ERROR, INIT_INFO, LOGOUT, SENT_MSG, SET_ERROR, SET_USER, TOOGLE_LOADING,
} from '../actions';

export const initialState = {
  loading: false,
  userId: '',
  logged: false,
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
  avatar: '',
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
        loading: false,
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
        loading: false,
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
    case TOOGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        userId: '',
        logged: false,
        fullname: '',
        email: '',
        username: '',
        avatar: '',
        birthdate: '',
        posts: [],
        message: '',
        created_at: '',
      };
    default:
      return state;
  }
};

export default reducer;
