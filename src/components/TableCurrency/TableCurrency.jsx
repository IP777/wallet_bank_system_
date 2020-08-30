import React from 'react';
import style from './TableCurrency.module.css';

const TableCurrency = ({ currency, getCurrency }) => {
  if (currency.length < 2) {
    getCurrency();
  }

  const currencyName = (code) => {
    switch (code) {
      case 840:
        return 'USD';
      case 978:
        return 'EUR';
      case 643:
        return 'RUR';
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
        {currency &&
          currency.map((item) => (
            <tr className={style.tableRaw}>
              <td className={style.tableCell}>
                {currencyName(item.currencyCodeA)}
              </td>
              <td className={style.tableCell}>{item.rateBuy}</td>
              <td className={style.tableCell}>{item.rateSell}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableCurrency;
