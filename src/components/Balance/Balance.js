import React from 'react';
import style from './Balance.module.css';

export const Balance = ({ balance }) => {
  return (
    <div className={style.balance}>
      <p>Баланс</p>
      <span>{balance}.00 грн</span>
    </div>
  );
};
