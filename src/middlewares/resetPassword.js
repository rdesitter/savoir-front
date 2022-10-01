/* eslint-disable quote-props */
import axios from 'axios';
import {
  displayElement,
  msgSent, RESET_PASSWORD, setError, SUBMIT_NEW_PASSWORD, toggleLoading,
} from '../actions';

const instance = axios.create({
  baseURL: 'http://localhost:5050/',
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
      instance.post('user/resetpassword', { email }, config)
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
  else if (action.type === SUBMIT_NEW_PASSWORD) {
    // console.log(action.token)
    try {
      store.dispatch(toggleLoading());
      const { user: { password } } = store.getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${action.token}`,
        },
      };
      instance.post('api/newpassword', { password }, config)
        .then((response) => {
          store.dispatch(msgSent(response.data.message));
          store.dispatch(displayElement());
          store.dispatch(toggleLoading());
        })
        .catch((error) => {
          store.dispatch(setError(error.message));
        });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }
  next(action);
};

export default resetPassword;
