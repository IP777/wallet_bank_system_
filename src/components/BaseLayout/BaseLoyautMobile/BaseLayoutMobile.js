import React from 'react';
import { Balance } from '../../Balance/Balance';
import Navigation from '../../Navigation/Navigation';
import styles from './BaseLayoutMobile.module.css';

export default function BaseLayoutMobile({ children, isMobile = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation isMobile={isMobile} />
      </div>

      <Balance balance={24000} />

      <div className={styles.main}>{children}</div>
    </div>
  );
}
