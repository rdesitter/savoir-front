import {
  CHANGE_CATEGORY_VALUE, CHANGE_LEARNORSHARE_VALUE, LAUNCH_SEARCH, SET_RESULTS,
} from '../actions';
import posts from '../data/posts';

export const initialState = {
  learnOrShare: '',
  category: '',
  loading: false,
  results: posts,
  categoryValue: '',
  learnOrShareValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LAUNCH_SEARCH:
      return {
        ...state,
        learnOrShare: action.learnOrShare,
        category: action.category,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.results,
        loading: false,
      };
    case CHANGE_CATEGORY_VALUE:
      return {
        ...state,
        categorieValue: action.value,
      };
    case CHANGE_LEARNORSHARE_VALUE:
      return {
        ...state,
        learnOrShareValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
