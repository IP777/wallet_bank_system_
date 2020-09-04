import React from 'react';
import {
  MonthSelect,
  YearSelect,
} from '../TransactionsFilter/TransactionsFilter';
import PieChart from '../PieChart/PieChart';
import PieChartTable from '../PieChartTable/PieChartTable';
import style from './Statistics.module.css';
import { dateFilterForStatistics } from '../../services/dateFilterForStatistics';

export default function Statistics() {
  const dataChart = [
    {
      title: 'one',
      value: 10,
      color: '#000',
      createdAt: {
        mounth: 1,
        year: 2020,
      },
    },
    {
      title: 'two',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 2,
        year: 2020,
      },
    },
    {
      title: 'three',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 7,
        year: 2020,
      },
    },
    {
      title: 'four',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 7,
        year: 2020,
      },
    },
    {
      title: 'five',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 6,
        year: 2020,
      },
    },
    {
      title: 'six',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 6,
        year: 2020,
      },
    },
    {
      title: 'seven',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 4,
        year: 2020,
      },
    },
    {
      title: 'eight',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 4,
        year: 2020,
      },
    },
    {
      title: 'nine',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 3,
        year: 2020,
      },
    },
    {
      title: 'ten',
      value: 20,
      color: '#000',
      createdAt: {
        mounth: 3,
        year: 2020,
      },
    },
  ];
  const result = dateFilterForStatistics(dataChart);
  console.log(result);
  return (
    <React.Fragment>
      <div className={style.mainWrapper}>
        <div className={style.header}>Статистика</div>
        <div className={style.wrapper}>
          <div className={style.wrapperDiagramme}>
            <PieChart data={result} />
          </div>
          <div className={style.wrapperFS}>
            <div className={style.filterWrapper}>
              <MonthSelect />
              <YearSelect />
            </div>
            <PieChartTable data={result} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
