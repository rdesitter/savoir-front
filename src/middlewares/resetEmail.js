import axios from 'axios';
import {
  RESET_EMAIL, setError, toggleSavedData,
} from '../actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getUserData = (user) => ({
  admin: user.admin,
  userId: user.userId,
  avatarId: user.avatarId,
  birthdate: user.birthdate,
  created_at: user.created_at,
  description: user.description,
  email: user.email,
  firstname: user.firstname,
  lastname: user.lastname,
  logged: user.logged,
  postalCode: user.postalCode,
  pronoun: user.pronoun,
  roleId: user.roleId,
  userProfil: user.userProfil,
  username: user.username,
});

const tokenConfig = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
};

const ResetEmail = (store) => (next) => (action) => {
  if (action.type === RESET_EMAIL) {
    try {
      const { user } = store.getState();
      const { userId, email } = user;
      const userData = getUserData(user);

      instance.patch(`/api/user/${userId}`, { email }, tokenConfig)
        .then(() => {
          localStorage.setItem('user', JSON.stringify(userData));
          store.dispatch(toggleSavedData());
        })
        .catch((error) => {
          if (error.response.status === 401) {
            return store.dispatch(setError('Vous n\'êtes pas autorisé à faire cette modification'));
          }
          return store.dispatch(setError(error.message));
        });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }

  next(action);
};

export default ResetEmail;
