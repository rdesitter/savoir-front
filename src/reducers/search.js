import {
  CHANGE_CATEGORY_VALUE, CHANGE_LEARNORSHARE_VALUE, LAUNCH_SEARCH, SET_RESULTS,
} from '../actions';

export const initialState = {
  learnOrShare: '',
  category: '',
  loading: false,
  results: [],
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
        categoryValue: action.value,
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
