/* eslint-disable camelcase */
import axios from 'axios';
import {
  LOGIN, setError, setUser, SIGNUP, toggleLoading,
} from '../actions';

const instance = axios.create({
  baseURL: 'https://savoirs.onrender.com/api',
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
      instance.post('/login', { email, password }, config).then((response) => {
        const token = response.data.tokens.accessToken;
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
      instance.post('/register', {
        email, password, pseudo, birthdate,
      }, config).then((response) => {
        const token = response.data.accessToken;
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({
          email, password, pseudo, birthdate, created_at: date,
        }));
        store.dispatch(setUser({
          user: {
            email, password, pseudo, birthdate, created_at: date,
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
