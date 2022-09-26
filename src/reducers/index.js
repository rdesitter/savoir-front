import { combineReducers } from 'redux';

import postsReducer from './posts';
import userReducer from './user';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
