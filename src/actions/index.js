export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value: value,
  key: name,
});

export const CHANGE_VALUE_POST = 'CHANGE_VALUE_POST';

export const changeValuePost = (value, name) => ({
  type: CHANGE_VALUE_POST,
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

export const GET_USERS = 'GET_USERS';

export const getUsers = (id) => ({
  type: GET_USERS,
  id,
});

export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  user,
});
export const SET_SELECTED_USER_POST = 'SET_SELECTED_USER_POST';

export const setSelectedUserPost = (selectedUserPost) => ({
  type: SET_SELECTED_USER_POST,
  selectedUserPost,
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

export const sentMsg = (msg) => ({
  type: SENT_MSG,
  msg,
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

export const RESET_PASSWORD = 'RESET_PASSWORD';

export const resetPassword = (email) => ({
  type: RESET_PASSWORD,
  email,
});

export const MSG_SENT = 'MSG_SENT';

export const msgSent = (msg) => ({
  type: MSG_SENT,
  msg,
});

export const MSG_INIT = 'MSG_INIT';

export const msgInit = () => ({
  type: MSG_INIT,
});

export const SUBMIT_NEW_PASSWORD = 'SUBMIT_NEW_PASSWORD';

export const submitNewPasssword = (token) => ({
  type: SUBMIT_NEW_PASSWORD,
  token,
});

export const DISPLAY_ELEMENT = 'DISPLAY_ELEMENT';

export const displayElement = () => ({
  type: DISPLAY_ELEMENT,
});

export const INIT_USER = 'INIT_USER';

export const initUser = () => ({
  type: INIT_USER,
});

export const GET_SELECTED_POST = 'GET_SELECTED_POST';

export const getSelectedPost = (id) => ({
  type: GET_SELECTED_POST,
  id,
});

export const SET_SELECTED_POST = 'SET_SELECTED_POST';

export const setSelectedPost = (selectedPost) => ({
  type: SET_SELECTED_POST,
  selectedPost,
});

export const SET_SIMILAR_POSTS = 'SET_SIMILAR_POSTS';

export const setSimilarPosts = (posts) => ({
  type: SET_SIMILAR_POSTS,
  similarPosts: posts,
});

export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

export const TOGGLE_LOGGED = 'TOGGLE_LOGGED';

export const toggleLogged = () => ({
  type: TOGGLE_LOGGED,
});

export const NEW_POST = 'NEW_POST';

export const newPost = (dataObject) => ({
  type: NEW_POST,
  data: dataObject,
});

export const SET_NEW_POST = 'SET_NEW_POST';

export const setNewPost = (dataObject) => ({
  type: SET_NEW_POST,
  data: dataObject,
});

export const RESET_NEW_POST = 'RESET_NEW_POST';

export const resetNewPost = () => ({
  type: RESET_NEW_POST,
});

export const TOGGLE_POST_ERROR = 'TOGGLE_POST_ERROR';

export const togglePostError = () => ({
  type: TOGGLE_POST_ERROR,
});

export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';

export const getPostByCategory = (id) => ({
  type: GET_POSTS_BY_CATEGORY,
  id,
});

export const GET_TYPE_POSTS = 'GET_TYPE_POSTS';

export const getTypePosts = (id) => ({
  type: GET_TYPE_POSTS,
  id,

});
