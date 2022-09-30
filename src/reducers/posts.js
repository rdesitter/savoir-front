import { SET_POSTS } from '../actions';

export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default reducer;
