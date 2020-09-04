import React from 'react';

import TransactionFilter from '../../containers/TransactionsFilter';
import PieChart from '../PieChart/PieChart';
import PieChartTable from '../PieChartTable/PieChartTable';

import style from './Statistics.module.css';

export default function Statistics() {
  const dataChart = [
    { title: 'one', value: 10, color: '#000' },
    { title: 'two', value: 20, color: '#000' },
    { title: 'three', value: 20, color: '#000' },
    { title: 'four', value: 20, color: '#000' },
    { title: 'five', value: 20, color: '#000' },
    { title: 'six', value: 20, color: '#000' },
    { title: 'seven', value: 20, color: '#000' },
    { title: 'eight', value: 20, color: '#000' },
    { title: 'nine', value: 20, color: '#000' },
    { title: 'ten', value: 20, color: '#000' },
  ];
  return (
    <React.Fragment>
      <div className={style.mainWrapper}>
        <div className={style.header}>Статистика</div>
        <div className={style.wrapper}>
          <div className={style.wrapperDiagramme}>
            <PieChart data={dataChart} />
          </div>
          <div className={style.wrapperFS}>
            <div className={style.filterWrapper}>
              {/* <MonthSelect />
              <YearSelect /> */}
              <TransactionFilter />
            </div>
            <PieChartTable data={dataChart} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
