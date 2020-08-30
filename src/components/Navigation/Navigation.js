import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import style from './Navigation.module.css';
import * as ROUTES from '../../constants/router';

const Navigation = () => {
  return (
    <div className={style.nav}>
      <Link
        color="inherit"
        href={ROUTES.ROOT_ROUTE}
        to={ROUTES.ROOT_ROUTE}
        className={style.navlink}
      >
        <HomeIcon style={{ paddingTop: 8 }} />
        <span className={style.navtext}>Главная</span>
      </Link>
      <Link
        color="inherit"
        href={ROUTES.STATISTICS_ROUTE}
        to={ROUTES.STATISTICS_ROUTE}
        className={style.navlink}
      >
        <TimelineIcon style={{ paddingTop: 8 }} />
        <span className={style.navtext}>Статистика</span>
      </Link>
    </div>
  );
};

export default Navigation;
