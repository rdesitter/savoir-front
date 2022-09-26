import { CHANGE_VALUE } from '../actions';

export const initialState = {
  logged: false,
  fullname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
  birthday: '',
  error: false,
  errorMsg: '',
  posts: [],
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
