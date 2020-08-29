import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/reducers/app/params';
import { ROOT_ROUTE } from '../../constants/router';

function GuestRoute({ children, ...restProps }) {
  const isGuestUser = !useSelector(isLoggedInSelector);

  return (
    <Route
      {...restProps}
      render={() =>
        isGuestUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROOT_ROUTE,
            }}
          />
        )
      }
    />
  );
}

export default GuestRoute;
