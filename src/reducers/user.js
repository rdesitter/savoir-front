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
    default:
      return state;
  }
};

export default reducer;
