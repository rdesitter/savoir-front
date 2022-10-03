import {
  GET_POSTS,
  setPosts,
  GET_SELECTED_POST,
  setSelectedPost,
} from '../actions';

import posts from '../data/posts';
import selectedPost from '../data/selectedPost';

const selectPost = (store) => (next) => (action) => {
  if (action.type === GET_POSTS) {
    // AXIOS - posts from back
    store.dispatch(setPosts(posts));
  }
  else if (action.type === GET_SELECTED_POST) {
    store.dispatch(setSelectedPost(selectedPost));
  }

  next(action);
};

export default selectPost;
