import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initError } from '../actions';

function useInitError() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initError());
  }, []);
}

export default useInitError;
