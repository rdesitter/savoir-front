import { LAUNCH_SEARCH } from '../actions';

export const initialState = {
  learnOrShare: '',
  category: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LAUNCH_SEARCH:
      return {
        ...state,
        learnOrShare: action.learnOrShare,
        category: action.category,
      };
    default:
      return state;
  }
};

export default reducer;
