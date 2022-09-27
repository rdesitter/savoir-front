import { LAUNCH_SEARCH } from '../actions';

export const initialState = {
  selection__learnOrShare: '',
  selection__category: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LAUNCH_SEARCH:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
