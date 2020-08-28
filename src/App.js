import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
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
        <Route path="/" exact component={AsyncHome} />
        <Route path="/statistics" component={AsyncStatistics} />
        <Route path="/registration" component={AsyncRegistration} />
        <Route path="/login" component={AsyncLogin} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
