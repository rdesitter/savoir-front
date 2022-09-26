import axios from 'axios';
import { SEND_MESSAGE, sentMsg, setError } from '../actions';

// TODO mettre l'url de l'api
const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const contactForm = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const { user: { fullname, email, message } } = store.getState();
    instance.post('/contact', { fullname, email, message })
      .then(() => {
        store.dispatch(sentMsg());
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(setError('Le message n\'a pas pu être envoyé. Merci de réessayer plus tard.'));
      });
  }
  next(action);
};

export default contactForm;
