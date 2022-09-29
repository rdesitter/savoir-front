import { GET_CATEGORIES, LAUNCH_SEARCH, setCategories } from '../actions';
import categories from '../data/categories';



const search = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES) {
    store.dispatch(setCategories(categories)),
 }

  if (action.type === LAUNCH_SEARCH) {
    
  }

  next(action);
};

export default search;








// import axios from 'axios';
// import { FETCH_CATEGORIES, SET_RESULTS, SET_ERROR, LAUNCH_SEARCH } from '../actions';

// // TODO à remplacer par l'url de la BDD
// const instance = axios.create({
//   baseURL: 'http://localhost:5050',
// });

// const setSearchResults = (store) => (next) => (action) => {
//   if (action.type === FETCH_CATEGORIES) {
//     instance.get('/categories')
//       .then((response) => {
//         store.dispatch(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//         // eslint-disable-next-line max-len
//         store.dispatch({
//           // refaire un error
//           type: SET_ERROR,
//           errorMsg: 'La recherche n\'a pas abouti, merci de réessayer plus tard.',
//         });
//       });
//   }
//   else if (action.type === LAUNCH_SEARCH) {
//     const state = store.getState();
//     instance.get('/recherche', {
//       results: state.results,
//     })
//       .then((response) => {
//         store.dispatch({
//           type: SET_RESULTS,
//           results: response.data.results,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         // eslint-disable-next-line max-len
//         store.dispatch({
//           type: SET_ERROR,
//           errorMsg: 'La recherche n\'a pas abouti, merci de réessayer plus tard.',
//         });
//       });
//   }
//   next(action);
// };

// export default search;
