import React from 'react';
import style from './TableCurrency.module.css';
import currency from '../../templateData/currency.json';

const TableCurrency = () => (
  <table className={style.table}>
    <thead className={style.tableHead}>
      <tr className={style.tableRaw}>
        <th className={style.tableCellHead}>Валюта</th>
        <th className={style.tableCellHead}>Продажа</th>
        <th className={style.tableCellHead}>Покупка</th>
      </tr>
    </thead>
    <tbody className={style.tableBody}>
      {currency.map((item) => (
        <tr className={style.tableRaw}>
          <td className={style.tableCell}>{item.currencyName}</td>
          <td className={style.tableCell}>{item.sale}</td>
          <td className={style.tableCell}>{item.buy}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableCurrency;
