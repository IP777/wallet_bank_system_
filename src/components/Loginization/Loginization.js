import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './Loginization.module.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { validateEmail } from '../../services/utilites';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/lock.svg';

const Loginization = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    const email = e.target.value;
    console.log();
    setEmail(email);
  };

  const passwordChangeHandler = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log('submit');
    if (validateEmail(email) && password.length >= 6) {
      onLogin({ email, password: 'string' });
    } else {
      toast('Неправильний пароль або логін. Спробуйте ще раз');
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandle} noValidate>
      <div className={styles.logo} />
      <div className={styles.wallet} />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        placeholder="E-mail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        name="email"
        type="email"
        value={email}
        onChange={emailChangeHandler}
        autoComplete="email"
        className={styles.input}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        value={password}
        onChange={passwordChangeHandler}
        type="password"
        id="password"
        placeholder="Пароль"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
        autoComplete="current-password"
        className={styles.input}
      />

      <Link className={styles.link} to="/">
        На главную
      </Link>
      <button type="submit" name="login" className={styles.button}>
        Войти
      </button>
      <div className={styles.registry_link}>
        <Link className={styles.link} to="/registration">
          Регистрация
        </Link>
      </div>
    </form>
  );
};

export default Loginization;
