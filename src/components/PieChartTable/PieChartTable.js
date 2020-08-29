import React from 'react';
import css from './PieChartTable.module.css';

const PieChartTable = ({ data }) => (
  <table className={css.table}>
    <tbody>
      <tr className={css.row}>
        <th className={css.cell}>Категории</th>
        <th className={css.cell}>Сумма</th>
      </tr>
      {data.map((item) => (
        <tr className={css.row}>
          <td
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: item.color,
            }}
          ></td>
          <td className={css.cell}>{item.title}</td>
          <td className={css.cell}> {item.value} </td>
        </tr>
      ))}

      <tr className={css.row}>
        <td className={css.cell}>Расходы</td>
        <td className={css.cell}>
          {data
            .map((item) => item.value)
            .reduce((acc, reducer) => acc + reducer)}
        </td>
      </tr>
      <tr className={css.row}>
        <td className={css.cell}>Доходы</td>
        <td className={css.cell}>Доходы должны приходить пропсом</td>
      </tr>
    </tbody>
  </table>
);

export default PieChartTable;
