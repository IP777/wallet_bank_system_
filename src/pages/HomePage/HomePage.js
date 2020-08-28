import React from 'react';
import style from './HomePage.module.css';

import { Balance } from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';

import TableTransactions from '../../components/TableTransactions/TableTransactions';
import ModalPage from '../ModalPage/ModalPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <TableTransactions />
      <Balance />
      <ModalPage />
    </>
  );
};

export default HomePage;
