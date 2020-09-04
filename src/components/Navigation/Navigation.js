import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import style from './Navigation.module.css';
import * as ROUTES from '../../constants/router';

const Navigation = ({ isMobile }) => {
  return (
    <div className={style.nav}>
      <Link
        color="inherit"
        href={ROUTES.ROOT_ROUTE}
        to={ROUTES.ROOT_ROUTE}
        className={style.navlink}
      >
        <HomeIcon className={style.navicon} />
        <span className={style.navtext}>Главная</span>
      </Link>
      <Link
        color="inherit"
        href={ROUTES.STATISTICS_ROUTE}
        to={ROUTES.STATISTICS_ROUTE}
        className={style.navlink}
      >
        <TimelineIcon className={style.navicon} />
        <span className={style.navtext}>Статистика</span>
      </Link>
      {isMobile && (
        <Link
          color="inherit"
          href={ROUTES.CURRENCY_ROUTE}
          to={ROUTES.CURRENCY_ROUTE}
          className={style.navlink}
        >
          <AttachMoneyIcon className={style.navicon} />
        </Link>
      )}
    </div>
  );
};

export default Navigation;
