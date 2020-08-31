import React from 'react';
import transactions from '../../../templateData/transactions.json';
import TableRaw from '../TableRaw';
import style from './TableTransactionsDesctop.module.css';

const TableTransactionsBrowser = () => (
  <table className={style.table}>
    <thead>
      <tr className={style.tableRaw}>
        <th className={style.tableHead}>Дата</th>
        <th className={style.tableHead}>Тип</th>
        <th className={style.tableHead}>Категория</th>
        <th className={style.tableHead}>Комментарий</th>
        <th className={style.tableHead}>Сумма</th>
        <th className={style.tableHead}>Баланс</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((item) => (
        <TableRaw props={item} style={style} key={item.id} />
      ))}
    </tbody>
  </table>
);

export default TableTransactionsBrowser;
