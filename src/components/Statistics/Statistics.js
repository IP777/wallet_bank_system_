import React from 'react';
import {
  MonthSelect,
  YearSelect,
} from '../TransactionsFilter/TransactionsFilter';
import style from './Statistics.module.css';

export default function Statistics() {
  return (
    <React.Fragment>
      <div className={style.mainWrapper}>
        <div className={style.header}>Статистика</div>
        <div className={style.wrapper}>
          <div className={style.wrapperDiagramme}>
            <div className={style.diagramme}>diagramme Component here</div>
          </div>
          <div className={style.wrapperFS}>
            <div className={style.filterWrapper}>
              <MonthSelect />
              <YearSelect />
            </div>
            <div className={style.statistic}>statistics Component here</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
