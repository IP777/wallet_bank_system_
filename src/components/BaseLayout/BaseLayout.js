import React from 'react';
import { Balance } from '../Balance/Balance';
import Navigation from '../Navigation/Navigation';
import Currency from '../../containers/Currency';
import styles from './BaseLayout.module.css';

export default function BaseLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
        <Balance balance={24000} />
        <Currency />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
