import React from 'react';
import style from './Balance.module.css';

export const Balance = ({ totalBalance }) => {
  return (
    <div className={style.balance}>
      <p>Баланс</p>
      <span>{totalBalance} грн</span>
    </div>
  );
};
