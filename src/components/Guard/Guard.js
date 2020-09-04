import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadedSelector } from '../../redux/reducers/app/params';
import { getInitialData } from '../../redux/operations/app/params';

const Guard = ({ children }) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(isLoadedSelector);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return isLoaded ? children : null;
};

export default Guard;
