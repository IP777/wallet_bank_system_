import React from 'react';
//import style from './StatisticsPage.module.css';
import Statistics from '../../components/Statistics/Statistics';
import Header from '../../components/Header/Header';
import BaseLayout from '../../components/BaseLayout/BaseLayout';

const StatisticsPage = () => {
  return (
    <>
      <Header />
      <BaseLayout>
        <Statistics />
      </BaseLayout>
    </>
  );
};

export default StatisticsPage;
