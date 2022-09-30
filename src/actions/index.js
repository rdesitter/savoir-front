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
  email: data.user.email,
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
  pronoun: data.user.pronoun,
  token: data.token,
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

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const LAUNCH_SEARCH = 'LAUNCH_SEARCH';

export const launchSearch = (learnOrShare, category) => ({
  type: LAUNCH_SEARCH,
  learnOrShare,
  category,
});

export const SET_RESULTS = 'SET_RESULTS';

export const setResults = (results) => ({
  type: SET_RESULTS,
  results,
});

export const CHANGE_CATEGORY_VALUE = 'CHANGE_CATEGORY_VALUE';

export const changeCategoryValue = (value) => ({
  type: CHANGE_CATEGORY_VALUE,
  value,
});

export const CHANGE_LEARNORSHARE_VALUE = 'CHANGE_LEARNORSHARE_VALUE';

export const changeLearnOrShareValue = (value) => ({
  type: CHANGE_LEARNORSHARE_VALUE,
  value,
});

export const TOOGLE_LOADING = 'TOOGLE_LOADING';

export const toggleLoading = () => ({
  type: TOOGLE_LOADING,
});

export const SIGNUP = 'SIGNUP';

export const signUp = () => ({
  type: SIGNUP,
});

export const LOGOUT = 'LOGOUT';

export const logOut = () => ({
  type: LOGOUT,
});

export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const SET_POSTS = 'SET_POSTS';

export const setPosts = (selectedPosts) => ({
  type: SET_POSTS,
  selectedPosts,
});
