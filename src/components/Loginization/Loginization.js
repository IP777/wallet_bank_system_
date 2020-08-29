import React from 'react';
import styles from './Loginization.module.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/lock.svg';

const Loginization = ({ onLogin, authenticated }) => {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log('submit');
    //Заглушка для отправки формы
    onLogin({ email: 'test1232@tt.est', password: 'string' });
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
        autoComplete="email"
        className={styles.input}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
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

      <NavLink className={styles.link} to="/">
        На главную
      </NavLink>
      <button type="submit" name="login" className={styles.button}>
        Войти
      </button>
      <div className={styles.registry_link}>
        <NavLink className={styles.link} to="/registration">
          Регистрация
        </NavLink>
      </div>
    </form>
  );
};

export default Loginization;
