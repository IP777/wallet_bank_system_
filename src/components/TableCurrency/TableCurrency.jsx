import React from 'react';
import style from './TableCurrency.module.css';

const currency = [
  {
    currencyName: 'USD',
    sale: '27.15',
    buy: '27.45',
  },
  {
    currencyName: 'EUR',
    sale: '32.15',
    buy: '33.00',
  },
  {
    currencyName: 'RUB',
    sale: '00.00',
    buy: '00.00',
  },
];

const TableCurrency = () => (
  <div className={style.tablewrapper}>
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
  </div>
);

export default TableCurrency;
