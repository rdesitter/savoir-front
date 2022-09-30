import { GET_POSTS, setPosts } from '../actions';
import posts from '../data/posts';

const selectedPosts = (store) => (next) => (action) => {
  if (action.type === GET_POSTS) {
    store.dispatch(setPosts(selectedPosts));
  }

  next(action);
};

export default posts;
