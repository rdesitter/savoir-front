import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import {
  GET_CATEGORIES, LAUNCH_SEARCH, setCategories, toggleLoading, setResults,
} from '../actions';
// import categories from '../data/categories';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// - lancer la recherche sur la route GET /api/annonces/category/:category_id,
// et les enregistrer dans le state
// - afficher un loader le temps de la requete
// - si ok rediriger vers `/recherche?learnOrShare=${learnOrShareValue}&category=${categoryValue}`
// (voir le hook useNavigate() )
// - si pas ok prévoir affichage message d'erreur

const search = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES) {
    instance.get('/api/categories')
      .then((response) => {
        store.dispatch(setCategories(response.data));
        store.dispatch(toggleLoading());
        // console.log('ma reponse', response.data);
      })
      .catch((error) => {
      // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }

  if (action.type === LAUNCH_SEARCH) {
    instance.get(`/api/annonces/category/${action.category}`)
      .then((response) => {
        // console.log('ma reponse', response);
        store.dispatch(setResults(response.data));
      })
      .catch((error) => {
      // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
    // console.log('lauchSearch', action.learnOrShare, action.category);
  }

  next(action);
};

export default search;
