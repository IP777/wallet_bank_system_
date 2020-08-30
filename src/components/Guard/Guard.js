import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserLogin } from '../../redux/operations/app/params';

const Guard = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return children;
};

export default Guard;
