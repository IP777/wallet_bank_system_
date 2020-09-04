import React from 'react';
import { Balance } from '../../Balance/Balance';
import Navigation from '../../Navigation/Navigation';
import Currency from '../../../containers/Currency';
import styles from './BaseLayoutDesktop.module.css';

export default function BaseLayout({ children, isCurrency }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
        <Balance balance={24000} />
        {isCurrency && <Currency />}
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
