import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Registration.css';
import { validateEmail } from '../../services/utilites';

const Registration = ({ onRegistratio }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [applypassword, setApplyPassword] = useState('');

  const emailChangeHandler = (e) => {
    const email = e.target.value;
    console.log();
    setEmail(email);
  };

  const passwordChangeHandler = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const nameChangeHandler = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const applypasswordChangeHandler = (e) => {
    const applypassword = e.target.value;
    setApplyPassword(applypassword);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log('submit');
    if (password !== applypassword)
      toast('Неспівпадає пароль підтвердження. Спробуйте ще раз');
    if (validateEmail(email) && password.length >= 6) {
      onRegistratio({ email, password: 'string', name });
    } else {
      toast('Невалидний пароль або e-mail. Спробуйте ще раз');
    }
  };

  return (
    <div class="sign-up-wrapper">
      <div className="logo-wrapper">
        <div className="logo-wallet"></div>
        <div className="logo-text">
          <h1 className="logo-tex">Wallet</h1>
        </div>
      </div>
      <div className="form-container">
        <form className="sign-up-form" onSubmit={submitHandle} noValidate>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            placeholder="E-mail"
            className="email-input input-form"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            // minLength="6"
            placeholder="Пароль"
            className="password-input input-form"
          />
          <input
            type="password"
            name="applyPassword"
            value={applypassword}
            onChange={applypasswordChangeHandler}
            placeholder="Подтвердить пароля"
            className="applyPassword-input input-form"
          />
          <input
            type="name"
            name="name"
            value={name}
            onChange={nameChangeHandler}
            placeholder="Имя"
            className="name-input input-form"
          />
          <button label="Регистрация" type="submit" className="sign-up-button">
            Регистрация
          </button>
          <span className="login">
            <Link to="/login" className="login-link">
              Войти
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Registration;
