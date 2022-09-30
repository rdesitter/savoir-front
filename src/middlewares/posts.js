import {
  GET_POSTS,
  setPosts,
} from '../actions';

import posts from '../data/posts';

const selectPost = (store) => (next) => (action) => {
  if (action.type === GET_POSTS) {
    // AXIOS - posts from back
    store.dispatch(setPosts(posts));
  }

  next(action);
};

export default selectPost;
