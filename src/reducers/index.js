import { combineReducers } from 'redux';

import postsReducer from './posts';
import userReducer from './user';
import categoriesReducer from './categories';
import searchReducer from './search';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  categories: categoriesReducer,
  search: searchReducer,
});

export default rootReducer;
