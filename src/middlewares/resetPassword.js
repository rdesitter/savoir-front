import axios from 'axios';
import { RESET_PASSWORD, setError, toggleLoading } from '../actions';

const instance = axios.create({
  baseURL: 'http://localhost:5050/users',
});

const resetPassword = (store) => (next) => (action) => {
  if (action.type === RESET_PASSWORD) {
    store.dispatch(toggleLoading());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { user: { email } } = store.getState();
      instance.post('/resetpassword', { email }, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.status === 401) {
            store.dispatch(setError('Email ou mot de  passe incorrect.'));
          }
          else {
            store.dispatch(setError(error.message));
          }
        });
    }
    catch (error) {
      console.error(error);
      store.dispatch(setError(error.message));
    }
  }
  next(action);
};

export default resetPassword;
