import React from 'react';
//import style from './StatisticsPage.module.css';
import Statistics from '../../components/Statistics/Statistics';
import Header from '../../containers/Header';
import BaseLayout from '../../components/BaseLayout/BaseLayout';

const StatisticsPage = () => {
  return (
    <>
      <Header />
      <BaseLayout isCurrency={false}>
        <Statistics />
      </BaseLayout>
    </>
  );
};

export default StatisticsPage;
