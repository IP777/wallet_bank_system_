import React from 'react';
import { connect } from 'react-redux';
import {
  MonthSelect,
  YearSelect,
} from '../TransactionsFilter/TransactionsFilter';

import TransactionFilter from '../../containers/TransactionsFilter';
import PieChart from '../PieChart/PieChart';
import PieChartTable from '../PieChartTable/PieChartTable';

import style from './Statistics.module.css';
import { dateFilterForStatistics } from '../../services/dateFilterForStatistics';
// import adaptArrOfObjectsForPieChart from '../../services/adaptArrOfObjectsForPieChart';
import colorGenerator from '../../services/colorGenerator';

function Statistics({ transactions }) {
  console.log('transactions', transactions);

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
  ];
  const data = transactions
    ? transactions.map((transaction) => ({
        title: transaction.category,
        value: transaction.amount,
        color: colorGenerator(),
        ...transaction.date,
      }))
    : dataChart;
  return (
    <React.Fragment>
      <div className={style.mainWrapper}>
        <div className={style.header}>Статистика</div>
        <div className={style.wrapper}>
          <div className={style.wrapperDiagramme}>
            <PieChart data={data} />
          </div>
          <div className={style.wrapperFS}>
            <div className={style.filterWrapper}>
              {/* <MonthSelect />
              <YearSelect /> */}
              <TransactionFilter />
            </div>
            <PieChartTable data={data} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  transactions: state.domain.transactions,
});

export default connect(mapStateToProps, null)(Statistics);
