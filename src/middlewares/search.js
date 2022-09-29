import { LAUNCH_SEARCH } from '../actions';
import posts from '../data/posts';



const search = (store) => (next) => (action) => {
  const { post: { titre, condition } } = store.getState();

  if (action.type === LAUNCH_SEARCH) {
    const results = posts.map((post) => user.email === email);
    if (results && (condition === results.password)) {
      console.log('selec', selectedUser);
      store.dispatch(setUser(selectedUser));
    }
    else {
      store.dispatch(setError('Mauvais utilisateur ou mot de passe'));
    }
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
