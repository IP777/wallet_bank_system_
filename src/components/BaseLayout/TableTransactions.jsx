import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TableTransactionsMobile from './TableTransactionsMobile/TableTransactionsMobile';
import TableTransactionsDesktop from './TableTransactionsDesktop/TableTransactionsDesktop';

const TableTransactions = ({ transactions, token, getTransactions }) => {
  useEffect(() => {
    getTransactions(token);
  }, []);

  const isDesktop = useMediaQuery('(min-width:549px)');

  return (
    <>
      {isDesktop ? (
        <TableTransactionsDesktop transactions={transactions} />
      ) : (
        <TableTransactionsMobile transactions={transactions} />
      )}
    </>
  );
};

export default TableTransactions;
