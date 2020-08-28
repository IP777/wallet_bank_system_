import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import TableTransactionsMobile from "./TableTransactionsMobile/TableTransactionsMobile";
import TableTransactionsDesctop from "./TableTransactionsDesctop/TableTransactionsDesctop";

const TableTransactions = () => {
	const isDesktop = useMediaQuery("(min-width:549px)");
	return (
		<>
			{isDesktop ? (
				<TableTransactionsDesctop />
			) : (
				<TableTransactionsMobile />
			)}
		</>
	);
};

export default TableTransactions;
