import { SET_TRANSACTIONS } from '../../constants/transactions';

export const setTransactions = (payload) => ({
  type: SET_TRANSACTIONS,
  payload,
});
