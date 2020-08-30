import React from 'react';
import css from './PieChartItem.module.css';
const PieChartItem = ({ item }) => (
  <div className={css.wrapper}>
    <div className={css.title}>
      <span
        style={{
          backgroundColor: item.color,
        }}
        className={css.color}
      ></span>
      {item.title}
    </div>
    <div className={css.value}>{item.value}</div>
  </div>
);

export default PieChartItem;
