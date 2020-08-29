import React from 'react';
import transactions from '../../../templateData/transactions.json';
import style from './TableTransactionsMobile.module.css';

const TableTransactionsMobile = () =>
  transactions.map((item) => {
    return (
      <table
        className={[
          style.table,
          item.type === '+' ? style.tableIncome : style.tableSpend,
        ].join(' ')}
      >
        <tbody>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Дата</th>
            <td className={style.tableCell}>{item.data}</td>
          </tr>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Тип</th>
            <td className={style.tableCell}>{item.type}</td>
          </tr>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Категория</th>
            <td className={style.tableCell}>{item.category}</td>
          </tr>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Комментарий</th>
            <td className={style.tableCell}>{item.comment}</td>
          </tr>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Сумма</th>
            <td
              className={[
                style.tableCell,
                item.type === '+'
                  ? style.tableAmountIncome
                  : style.tableAmountSpend,
              ].join(' ')}
            >
              {item.amount}
            </td>
          </tr>
          <tr className={style.tableRaw}>
            <th className={style.tableHead}>Баланс</th>
            <td className={style.tableCell}>{item.balance}</td>
          </tr>
        </tbody>
      </table>
    );
  });

export default TableTransactionsMobile;
