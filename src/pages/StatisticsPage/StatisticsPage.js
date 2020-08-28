import React from 'react';
import style from './StatisticsPage.module.css';
import Statistics from '../../components/Statistics/Statistics';

const StatisticsPage = () => {
  return (
    <>
      <div className={style.text}>Statistics Page!!!</div>
      <Statistics />
    </>
  );
};

export default StatisticsPage;
