import axios from 'axios';
import {
  GET_POSTS,
  setPosts,
  GET_SELECTED_POST,
  setSelectedPost,
  setSimilarPosts,
  togglePostError,
  GET_POSTS_BY_CATEGORY,
  GET_TYPE_POSTS,
} from '../actions';

import posts from '../data/posts';
// import selectedPost from '../data/selectedPost';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const selectPost = (store) => (next) => (action) => {
  if (action.type === GET_POSTS) {
    // AXIOS - posts from back
    store.dispatch(setPosts(posts));
  }
  
  else if (action.type === GET_SELECTED_POST) {
    instance(`/api/annonces/${action.id}`)
      .then((response) => {
        store.dispatch(setSelectedPost(response.data.post));
        store.dispatch(setSimilarPosts(response.data.similarPosts));
      })
      .catch(() => {
        // console.log(error);
        store.dispatch(togglePostError());
      });
    // store.dispatch(setSelectedPost(selectedPost));
  }

  else if (action.type === GET_POSTS_BY_CATEGORY) {
    instance(`/api/annonces/type/${action.id}`)
      .then((response) => {
        store.dispatch(setPosts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  else if (action.type === GET_TYPE_POSTS) {
    instance(`/api/annonces/type/${action.id}`)
      .then((response) => {
        store.dispatch(setPosts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default selectPost;
