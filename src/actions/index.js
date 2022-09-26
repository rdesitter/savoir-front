export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value: value,
  key: name,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const LOGIN = 'LOGIN';

export const logIn = () => ({
  type: LOGIN,
});

export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  username: user.username,
  avatar: user.avatar,
  about: user.about,
  created_at: user.created_at,
});

export const SET_ERROR = 'SET_ERROR';

export const setError = (msg) => ({
  type: SET_ERROR,
  errorMsg: msg,
});
