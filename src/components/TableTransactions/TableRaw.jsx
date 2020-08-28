import React from "react";

const TableRaw = ({ props, style }) => (
  <tr className={style.tableRaw}>
    <td className={style.tableCell}>{props.data}</td>
    <td className={style.tableCell}>{props.type}</td>
    <td className={style.tableCell}>{props.category}</td>
    <td className={style.tableCell}>{props.comment}</td>
    <td
      className={[
        style.tableCell,
        props.type === "+" ? style.tableAmountIncome : style.tableAmountSpend,
      ].join(" ")}
    >
      {props.amount}
    </td>
    <td className={style.tableCell}>{props.balance}</td>
  </tr>
);

export default TableRaw;
