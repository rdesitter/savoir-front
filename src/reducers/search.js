import { LAUNCH_SEARCH, SET_RESULTS } from '../actions';

export const initialState = {
  learnOrShare: '',
  category: '',
  loading: false,
  results: [],
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
    default:
      return state;
  }
};

export default reducer;
