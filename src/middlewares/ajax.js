/* eslint-disable camelcase */
import axios from 'axios';
import {
  GET_AVATARS,
  LOGIN,
  setAvatars,
  setError,
  setUser,
  SIGNUP,
  toggleLoading,
  toggleSavedData,
  UPDATE_AVATAR,
  UPDATE_PERSONAL_INFO,
  UPDATE_PROFILE,
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
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token-date', Math.floor(new Date().getTime() / 1000));
        const data = { user: response.data.user, token };
        store.dispatch(setUser(data));
      }).catch((error) => {
        if (error.status === 401) {
          store.dispatch(setError('Email ou mot de  passe incorrect.'));
        }
        else {
          store.dispatch(setError('Email ou mot de  passe incorrect.'));
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
  else if (action.type === UPDATE_PROFILE) {
    try {
      const { user: { userId, username: pseudo, description } } = store.getState();
      instance.patch(`/api/user/${userId}`, { pseudo, description })
        .then((response) => {
          console.log(response.data);
          store.dispatch(toggleSavedData());
        })
        .catch((error) => {
          store.dispatch(setError(error.message));
        });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }
  else if (action.type === UPDATE_PERSONAL_INFO) {
    try {
      const {
        user: {
          userId, lastname, firstname, birthdate, postal_code, pronoun,
        },
      } = store.getState();
      instance.patch(`/api/user/${userId}`, {
        lastname, firstname, birthdate, postal_code, pronoun,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(toggleSavedData());
        })
        .catch((error) => {
          store.dispatch(setError(error.message));
        });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }
  else if (action.type === GET_AVATARS) {
    try {
      instance('/api/avatar')
        .then((response) => store.dispatch(setAvatars(response.data)))
        .catch((error) => store.dispatch(setError(error.message)));
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }
  else if (action.type === UPDATE_AVATAR) {
    const {
      user: {
        userId, avatarId: picture_id,
      },
    } = store.getState();
    instance.patch(`/api/user/${userId}`, { picture_id })
      .then((response) => {
        const token = response.data.token.accessToken;
        instance.defaults.headers.common.Authorization = `${token}`;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token-date', Math.floor(new Date().getTime() / 1000));
        const data = { user: response.data.user, token };
        store.dispatch(setUser(data));
        store.dispatch(toggleSavedData());
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(setError('error.message'));
      });
  }
  next(action);
};

export default ajax;
