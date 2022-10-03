import {
  SET_POSTS,
  SET_SELECTED_POST,
} from '../actions';

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
    case SET_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.selectedPost,
      };
    default:
      return state;
  }
};

export default reducer;
