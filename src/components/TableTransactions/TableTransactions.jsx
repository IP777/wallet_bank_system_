import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TableTransactionsMobile from './TableTransactionsMobile/TableTransactionsMobile';
import TableTransactionsDesctop from './TableTransactionsDesctop/TableTransactionsDesctop';

const TableTransactions = ({ transactions, token, getTransactions }) => {
  useEffect(() => {
    //getTransactions(token);
  }, []);

  const isDesktop = useMediaQuery('(min-width:549px)');

  return (
    <>
      {isDesktop ? (
        <TableTransactionsDesctop transactions={transactions} />
      ) : (
        <div />
        // <TableTransactionsMobile transactions={transactions} />
      )}
    </>
  );
};

export default TableTransactions;
