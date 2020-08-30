import React from 'react';
import { isMobile } from 'react-device-detect';

import TableTransactionsMobile from './TableTransactionsMobile/TableTransactionsMobile';
import TableTransactionsDesctop from './TableTransactionsDesctop/TableTransactionsDesctop';

const TableTransactions = () => (
  <>{isMobile ? <TableTransactionsMobile /> : <TableTransactionsDesctop />}</>
);

export default TableTransactions;
