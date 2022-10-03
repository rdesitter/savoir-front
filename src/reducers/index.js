import { combineReducers } from 'redux';

import postsReducer from './posts';
import userReducer from './user';
import categoriesReducer from './categories';
import searchReducer from './search';
import informationsReducer from './informations';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  categories: categoriesReducer,
  search: searchReducer,
  informations: informationsReducer,
});

export default rootReducer;
