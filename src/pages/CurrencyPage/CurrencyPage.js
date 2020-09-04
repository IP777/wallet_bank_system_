import React from 'react';
//import style from './HomePage.module.css';

import Header from '../../containers/Header';

import ModalPage from '../ModalPage/ModalPage';

import BaseLayout from '../../components/BaseLayout/BaseLayout';
import Currency from '../../containers/Currency';

const HomePage = () => {
  return (
    <>
      <Header />
      <BaseLayout>
        <Currency />
        <ModalPage />
      </BaseLayout>
    </>
  );
};

export default HomePage;
