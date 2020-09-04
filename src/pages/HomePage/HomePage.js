import React from 'react';
//import style from './HomePage.module.css';

import Header from '../../containers/Header';

import TableTransactions from '../../components/TableTransactions/TableTransactions';
import ModalPage from '../../containers/ModalPage';

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
