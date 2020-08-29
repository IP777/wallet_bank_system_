import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GuestRoute from './components/GuestRoute/GuestRoute';
import NotFoundPage from './pages/NotFoundPage';
import * as ROUTES from './constants/router';
import style from './App.module.css';

//Асинхронная подгрузка страниц + разделение на чанки
const AsyncHome = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "Home-page" */)
);
const AsyncStatistics = lazy(() =>
  import(
    './pages/StatisticsPage/StatisticsPage.js' /* webpackChunkName: "Statistics-page" */
  )
);
const AsyncRegistration = lazy(() =>
  import(
    './pages/RegistrationPage/RegistrationPage.js' /* webpackChunkName: "Registration-page" */
  )
);
const AsyncLogin = lazy(() =>
  import('./pages/LoginPage/LoginPage.js' /* webpackChunkName: "Login-page" */)
);

const App = () => {
  return (
    <Suspense
      fallback={<div className={style.loader}>Please wait Loading...</div>}
    >
      <Switch>
        {/* Private routes */}
        <PrivateRoute path={ROUTES.ROOT_ROUTE} exact>
          <AsyncHome />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.STATISTICS_ROUTE}>
          <AsyncStatistics />
        </PrivateRoute>

        {/* Only guests routes */}
        <GuestRoute path={ROUTES.REGISTRATION_ROUTE}>
          <AsyncRegistration />
        </GuestRoute>
        <GuestRoute path={ROUTES.LOGIN_ROUTE}>
          <AsyncLogin />
        </GuestRoute>

        {/* Errors */}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
