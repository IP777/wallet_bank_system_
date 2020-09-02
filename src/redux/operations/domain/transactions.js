import { getTransactionsRequest } from '../../../services/domain-api';
import { setTransactions } from '../../actions/domain/transactions';

export const getTransactions = (token) => async (dispatch) => {
  try {
    const response = await getTransactionsRequest(token);

    const res = response.finance.data.map((item) => {
      const dateObject = new Date(item.date);
      const date = dateObject.toLocaleDateString();
      return { ...item, date };
    });

    dispatch(setTransactions(res));
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};
