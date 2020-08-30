import React from 'react';
//import style from './HomePage.module.css';

import Header from '../../components/Header/Header';

import TableTransactions from '../../components/TableTransactions/TableTransactions';
import ModalPage from '../ModalPage/ModalPage';

import BaseLayout from '../../components/BaseLayout/BaseLayout';

const HomePage = () => {
  return (
    <>
      <Header />

      <BaseLayout>
        <TableTransactions />
        <ModalPage />
      </BaseLayout>
    </>
  );
};

export default HomePage;
