import {
  TOGGLE_POST_ERROR,
  SET_POSTS,
  SET_SELECTED_POST,
  SET_SIMILAR_POSTS,
} from '../actions';

export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {},
  similarPosts: [],
  isError: false,
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
        isLoading: false,
      };
    case SET_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.selectedPost,
      };
    case SET_SIMILAR_POSTS:
      return {
        ...state,
        similarPosts: action.similarPosts,
      };
    case TOGGLE_POST_ERROR:
      return {
        ...state,
        isError: !state.isError,
      };
    default:
      return state;
  }
};

export default reducer;
