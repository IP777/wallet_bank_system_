import React from 'react';

const TableRaw = ({ props, style }) => (
  <tr className={style.tableRaw}>
    <td className={style.tableCell}>{props.date}</td>
    <td className={style.tableCell}>{props.type}</td>
    <td className={style.tableCell}>{props.category}</td>
    <td className={style.tableCell}>{props.comments}</td>
    <td
      className={[
        style.tableCell,
        props.type === '+' ? style.tableAmountIncome : style.tableAmountSpend,
      ].join(' ')}
    >
      {props.amount}
    </td>
    <td className={style.tableCell}>
      {props.typeBalanceAfter === '-'
        ? '-' + props.balanceAfter
        : props.balanceAfter}
    </td>
  </tr>
);

export default TableRaw;
