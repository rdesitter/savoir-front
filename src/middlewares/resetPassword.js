import axios from 'axios';
import {
  msgSent, RESET_PASSWORD, setError, toggleLoading,
} from '../actions';

const instance = axios.create({
  baseURL: 'http://localhost:5050/user',
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
          store.dispatch(msgSent(response.data.status));
          store.dispatch(toggleLoading());
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(msgSent(error.response.data.status));
            store.dispatch(toggleLoading());
          }
          else {
            store.dispatch(setError(error.message));
            store.dispatch(toggleLoading());
          }
        });
    }
    catch (error) {
      // console.error(error);
      store.dispatch(setError(error.message));
    }
  }
  next(action);
};

export default resetPassword;
