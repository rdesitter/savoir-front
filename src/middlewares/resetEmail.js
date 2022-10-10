import axios from 'axios';
import {
  RESET_EMAIL, SUBMIT_NEW_EMAIL, toggleLoading, setError,
} from '../actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const ResetEmail = (store) => (next) => (action) => {
  next(action);
};

export default ResetEmail;
