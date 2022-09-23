import { CHANGE_VALUE } from '../actions';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  username: '',
  error: false,
  errorMsg: '',
  posts: [],
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
