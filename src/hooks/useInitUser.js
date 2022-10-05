import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initError, initUser } from '../actions';

function useInitUser() {
  const dispatch = useDispatch();

  // initialise error msg on first render
  useEffect(() => {
    dispatch(initError());
    dispatch(initUser());
  }, []);
}

export default useInitUser;
