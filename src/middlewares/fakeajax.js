import { LOGIN, setError, setUser } from '../actions';
import users from '../data/users';

const ajax = (store) => (next) => (action) => {
  const { user: { email, password } } = store.getState();

  if (action.type === LOGIN) {
    const selectedUser = users.find((user) => user.email === email);
    if (selectedUser && (password === selectedUser.password)) {
      store.dispatch(setUser(selectedUser.username));
    }
    else {
      store.dispatch(setError('Mauvais utilisateur ou mot de passe'));
    }
  }

  next(action);
};

export default ajax;
