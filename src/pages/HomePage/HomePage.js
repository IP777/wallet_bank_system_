import React from 'react';
//import style from './HomePage.module.css';

import { Balance } from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

import TableTransactions from '../../components/TableTransactions/TableTransactions';
import ModalPage from '../ModalPage/ModalPage';

const HomePage = () => {
  return (
    <>
      <Header />
      {/* Компонент-заглушка удалить после создания нормального */}
      <Navigation />
      {/* ------------------------ */}
      <ModalPage />
      <TableTransactions />
      <Balance />
    </>
  );
};

export default HomePage;
