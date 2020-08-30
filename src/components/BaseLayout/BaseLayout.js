import React from 'react';
import { Balance } from '../Balance/Balance';
import Navigation from '../Navigation/Navigation';
import TableCurrency from '../TableCurrency/TableCurrency';
import styles from './BaseLayout.module.css';

export default function BaseLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
        <Balance balance={24000} />
        <TableCurrency />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
