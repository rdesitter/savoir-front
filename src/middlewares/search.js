import { GET_CATEGORIES, LAUNCH_SEARCH, setCategories } from '../actions';
import categories from '../data/categories';

const search = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES) {
    store.dispatch(setCategories(categories));
  }

  if (action.type === LAUNCH_SEARCH) {
    console.log('lauchSearch');
  }

  next(action);
};

export default search;
