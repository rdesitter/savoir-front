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

export const setUser = (data) => ({
  type: SET_USER,
  username: data.user.pseudo,
  description: data.user.description,
  firstname: data.user.firstname,
  lastname: data.user.lastname,
  avatar: data.user.picture_id,
  about: data.user.about,
  created_at: data.user.created_at,
  userId: data.user.id,
  posts: data.user.posts,
  postalCode: data.user.postal_code,
  roleId: data.user.role_id,
  birthdate: data.user.birthdate,
  toker: data.token,
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

export const LAUNCH_SEARCH = 'LAUNCH_SEARCH';

export const launchSearch = (learnOrShare, category) => ({
  type: LAUNCH_SEARCH,
  learnOrShare,
  category,
});
