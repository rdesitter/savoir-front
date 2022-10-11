import axios from 'axios';
import {
  resetEmail, setError, SUBMIT_NEW_EMAIL,
} from '../actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const ResetEmail = (store) => (next) => (action) => {
  if (action.type === SUBMIT_NEW_EMAIL) {
    try {
      const { user } = store.getState();
      instance.patch(`/api/user/${user.userId}`)
        .then(() => {
          
        });
    }
    catch (error) {
      store.dispatch(setError(error.message));
    }
  }

  next(action);
};

export default ResetEmail;
