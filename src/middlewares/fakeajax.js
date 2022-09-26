import { LOGIN, setUser } from '../actions';
import users from '../data/users';

const ajax = (store) => (next) => (action) => {
  const { user: { email, password } } = store.getState();

  if (action.type === LOGIN) {
    console.log(users, email, password);
    const selectedUser = users.find((user) => user.email === email);
    console.log(selectedUser);
    if (password === selectedUser.password) {
      store.dispatch(setUser(selectedUser.username));
    }
  }
  next(action);
};

export default ajax;
