import React from 'react';
import style from './TableCurrency.module.css';
import * as CURRENCY from '../../constants/curency';

const TableCurrency = ({ currency, getCurrency }) => {
  if (!currency) {
    getCurrency();
  }

  const currencyName = (code) => {
    switch (code) {
      case CURRENCY.USD.code:
        return CURRENCY.USD.name;
      case CURRENCY.EUR.code:
        return CURRENCY.EUR.name;
      case CURRENCY.RUB.code:
        return CURRENCY.RUB.name;
      default:
        break;
    }
  };

  return (
    <table className={style.table}>
      <thead className={style.tableHead}>
        <tr className={style.tableRaw}>
          <th className={style.tableCellHead}>Валюта</th>
          <th className={style.tableCellHead}>Покупка</th>
          <th className={style.tableCellHead}>Продажа</th>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {currency ? (
          currency.map((item) => (
            <tr className={style.tableRaw} key={item.currencyCodeA}>
              <td className={style.tableCell}>
                {currencyName(item.currencyCodeA)}
              </td>
              <td className={style.tableCell}>{item.rateBuy}</td>
              <td className={style.tableCell}>{item.rateSell}</td>
            </tr>
          ))
        ) : (
          // Default params
          <tr className={style.tableRaw}>
            <td className={style.tableCell}>-</td>
            <td className={style.tableCell}>-</td>
            <td className={style.tableCell}>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableCurrency;
