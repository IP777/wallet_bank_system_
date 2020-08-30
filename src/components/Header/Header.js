import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = ({ userName, isLoggedIn, logout }) => {
  return (
    <div className={style.wrapper}>
      <Link className={style.logo} to="/" />

      {isLoggedIn && (
        <div className={style.btnBlock}>
          <span className={style.loginBtn}>{userName}</span>
          <span className={style.logoutBtn} onClick={logout} />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

Header.defaultProps = {
  userName: '',
  isLoggedIn: true,
  logout: () => {},
};

export default Header;
