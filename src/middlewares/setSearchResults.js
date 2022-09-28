import axios from 'axios';
import { SET_RESULTS, SET_ERROR } from '../actions';

const setSearchResults = (store) => (next) => (action) => {
  if (action.type === SET_RESULTS) {
    const state = store.getState();
    // TODO à remplacer par l'url de la BDD
    axios.get('api/recherche', {
      results: state.results,
    })
      .then((response) => {
        store.dispatch({
          type: SET_RESULTS,
          results: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
        // eslint-disable-next-line max-len
        store.dispatch({
          type: SET_ERROR,
          errorMsg: 'La recherche n\'a pas abouti, merci de réessayer plus tard',
        });
      });
  }
  next(action);
};

export default setSearchResults;
