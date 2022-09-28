import axios from 'axios';
import { LOGIN, setError, setUser } from '../actions';

const instance = axios.create({
  baseURL: 'https://savoirs.onrender.com/api',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    const { user: { email, password } } = store.getState();
    instance.post('/login', { email, password }).then((response) => {
      // console.log(response.data);
      store.dispatch(setUser(response.data));
    }).catch((error) => {
      // console.log(error);
      store.dispatch(setError(error.message));
    });
  }
  next(action);
};

export default ajax;
