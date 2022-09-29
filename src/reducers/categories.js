import { FETCH_CATEGORIES } from '../actions';

export const initialState = {
  list: [
    'Cuisine',
    'Informatique',
    'Sport',
  ],
  // loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
