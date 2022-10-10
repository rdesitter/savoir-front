import {
  TOGGLE_POST_ERROR,
  SET_POSTS,
  SET_SELECTED_POST,
  SET_SIMILAR_POSTS,
  SET_SELECTED_USER_POST,
  TOGGLE_POSTS_LOADING,
} from '../actions';

export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {},
  similarPosts: [],
  isError: false,
  loadindSelectedPost: true,
  selectedUserPost: [],
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
        isLoading: false,
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
    case SET_SELECTED_USER_POST:
      return {
        ...state,
        selectedUserPost: action.selectedUserPost,
        loadingSelectedPost: false,
      };
    case TOGGLE_POSTS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default reducer;
