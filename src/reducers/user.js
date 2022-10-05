import {
  CHANGE_VALUE,
  DISPLAY_ELEMENT,
  INIT_ERROR,
  INIT_INFO,
  INIT_USER,
  LOGOUT,
  SENT_MSG,
  SET_ERROR,
  SET_SELECTED_USER,
  SET_USER,
  TOGGLE_LOGGED,
  TOGGLE_SAVED_DATA,
  TOOGLE_LOADING,
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
  admin: false,
  displayElement: false,
  userLoading: true,
  dataSaved: false,
  userProfil: {
    userId: '',
    username: '',
    avatar: '',
    posts: [],
    created_at: '',
    description: '',
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
          msg: action.msg,
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
    case DISPLAY_ELEMENT:
      return {
        ...state,
        displayElement: !state.displayElement,
      };
    case INIT_USER:
      return {
        ...state,
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
        admin: false,
        displayElement: false,
      };
    case TOGGLE_LOGGED:
      return {
        ...state,
        logged: !state.logged,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        userProfil: action.user,
        userLoading: false,
      };
    case TOGGLE_SAVED_DATA:
      return {
        ...state,
        dataSaved: !state.dataSaved,
      };
    default:
      return state;
  }
};

export default reducer;
