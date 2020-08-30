import React from 'react';
import PieChartItem from '../PieChartItem/PieChartItem';
import css from './PieChartTable.module.css';

const PieChartTable = ({ data }) => (
  <div className={css.wraper}>
    <div className={css.innerWraper}>
      <div className={css.heading}>
        <div className={css.headingTitle}>Категории</div>
        <div className={css.headingValue}>Сумма</div>
      </div>
      {data.map((item) => (
        <PieChartItem key={item.title} item={item} />
      ))}
    </div>
    <div className={css.ending}>
      <div className={css.endingTitle}>Расходы</div>
      <div className={css.endingValue}>
        {data.map((item) => item.value).reduce((acc, reducer) => acc + reducer)}
      </div>
    </div>
    <div className={css.ending}>
      <div className={css.endingTitle}>Доходы</div>
      <div className={css.end}>Доходы с пропса</div>
    </div>
  </div>
);

export default PieChartTable;
