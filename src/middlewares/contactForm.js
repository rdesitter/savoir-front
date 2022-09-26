import axios from 'axios';
import { SEND_MESSAGE } from '../actions';

// TODO mettre l'url de l'api
const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const contactForm = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const { user: { fullname, email, message } } = store.getState();
    instance.post('/contact', { fullname, email, message })
      .then(() => {
        store.dispatch({
          type: 'MSG_SENT',
        });
      })
      .catch((error) => {
        console.log(error);
        store.dispatch({
          type: 'MSG_ERROR',
        });
      });
  }
  next(action);
};

export default contactForm;
