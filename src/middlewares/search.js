import axios from 'axios';
import {
  LAUNCH_SEARCH,
  GET_CATEGORIES,
  GET_POSTS_RESULTS,
  setCategories,
  setResults,
  setPostsResults,
  toggleLoading,
} from '../actions';

// import results from '../data/posts';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const search = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES) {
    instance.get('/api/categories')
      .then((response) => {
        store.dispatch(setCategories(response.data));
        store.dispatch(toggleLoading());
      })
      .catch((error) => {
      // en cas d’échec de la requête
        console.log(error);
      });
  }

  if (action.type === LAUNCH_SEARCH) {
    instance.get(`/api/annonces/category/${action.category}`)
      .then((response) => {
        store.dispatch(setResults(response.data));
      })
      .catch((error) => {
      // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }

  if (action.type === GET_POSTS_RESULTS) {
    instance.get(`/api/annonces/category/${action.category}/type/${action.learnOrShare}`)
      .then((response) => {
        store.dispatch(setPostsResults(response.data));
      })
      .catch((error) => {
      // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }

  next(action);
};

export default search;
