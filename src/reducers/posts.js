import { SET_POSTS } from '../actions';

export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {
    id: '',
    title: '',
    createdAt: '',
    category: '',
    location: '',
    description: '',
    user: {},
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        infos: action.selectedPost,
      };
    default:
      return state;
  }
};

export default reducer;
