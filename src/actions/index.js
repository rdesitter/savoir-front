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

export const setUser = (username) => ({
  type: SET_USER,
  username,
});

export const SET_ERROR = 'SET_ERROR';

export const setError = (msg) => ({
  type: SET_ERROR,
  errorMsg: msg,
});

export const INIT_ERROR = 'INIT_ERROR';

export const initError = () => ({
  type: INIT_ERROR,
});

export const SENT_MSG = 'SENT_MSG';

export const sentMsg = () => ({
  type: SENT_MSG,
});

export const INIT_INFO = 'INIT_INFO';

export const initInfo = () => ({
  type: INIT_INFO,
});
