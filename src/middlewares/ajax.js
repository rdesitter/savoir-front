/* eslint-disable camelcase */
import axios from 'axios';
import {
  LOGIN, setError, setUser, SIGNUP, toggleLoading,
} from '../actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const ajax = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    store.dispatch(toggleLoading());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { user: { email, password } } = store.getState();
      instance.post('/api/login', { email, password }, config).then((response) => {
        const token = response.data.tokens.accessToken;
        instance.defaults.headers.common.Authorization = `${token}`;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.data.user[0]));
        const data = { user: response.data.user[0], token };
        store.dispatch(setUser(data));
      }).catch((error) => {
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
      store.dispatch(setError(error.message));
    }
  }
  else if (action.type === SIGNUP) {
    store.dispatch(toggleLoading());
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const date = new Date().toISOString().split('T')[0];
      const {
        user: {
          email, password, username: pseudo, birthdate,
        },
      } = store.getState();
      instance.post('/api/register', {
        email, password, pseudo, birthdate,
      }, config).then((response) => {
        const token = response.data.newTokens.accessToken;
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({
          email, password, pseudo, birthdate, created_at: date, id: response.data.newUser,
        }));
        store.dispatch(setUser({
          user: {
            email, pseudo, birthdate, created_at: date, userId: response.data.newUser,
          },
        }));
        store.dispatch(toggleLoading());
      }).catch((error) => {
        store.dispatch(setError(error.message));
      });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }
  next(action);
};

export default ajax;
