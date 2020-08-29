import React from 'react';
import './RegisterComponent.css';
import { NavLink } from 'react-router-dom';

const RegisterComponent = () => {
  return (
    <div class="sign-up-wrapper">
      <div className="logo-wrapper">
        <div className="logo-wallet"></div>
        <div className="logo-text">
          <h1 className="logo-tex">Wallet</h1>
        </div>
      </div>
      <div className="form-container">
        <form className="sign-up-form">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="email-input input-form"
          />
          <input
            name="password"
            type="password"
            minLength="3"
            placeholder="Пароль"
            className="password-input input-form"
          />
          <input
            type="password"
            name="applyPassword"
            placeholder="Подтвердить пароля"
            className="applyPassword-input input-form"
          />
          <input
            type="name"
            name="name"
            placeholder="Имя"
            className="name-input input-form"
          />
          <button label="Регистрация" type="submit" className="sign-up-button">
            Регистрация
          </button>
          <span className="login">
            <NavLink to="/login" className="login-link">
              Войти
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
