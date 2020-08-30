import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/reducers/app/params';
import { LOGIN_ROUTE } from '../../constants/router';

function PrivateRoute({ children, ...restProps }) {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <Route
      {...restProps}
      render={() =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
