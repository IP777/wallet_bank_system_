import React from 'react';
//import style from './StatisticsPage.module.css';
import Statistics from '../../components/Statistics/Statistics';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

const StatisticsPage = () => {
  return (
    <>
      <Header />
      {/* Компонент-заглушка удалить после создания нормального */}
      <Navigation />
      {/* ------------------------ */}
      <Statistics />
    </>
  );
};

export default StatisticsPage;
