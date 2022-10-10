/* eslint-disable camelcase */
/* eslint-disable quote-props */
import axios from 'axios';
import { msgSent, NEW_POST, setNewPost } from '../actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const createPost = (store) => (next) => (action) => {
  if (action.type === NEW_POST) {
    const {
      postCreation: {
        title,
        category: image,
        description,
        condition: condition_id,
        type: type_id,
        category: category_id,
      },
    } = store.getState();
    const { user: { token, userId: user_id } } = store.getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
    // TODO supprimer le postal_code quand valeur par défaut sera ok côté back
    instance.post('/api/users/create-annonces', {
      title, image, description, condition_id, type_id, category_id, postal_code: 34000, user_id,
    }, config)
      .then((response) => {
        if (response.status === 200) {
          store.dispatch(setNewPost(response.data));
        }
      })
      .catch((error) => {
        store.dispatch(msgSent(error.message));
      });
  }
  next(action);
};

export default createPost;
