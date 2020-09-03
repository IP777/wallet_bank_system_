import { SET_DATA } from '../../constants/transaction';

export const setTransactionData = (payload) => ({
  type: SET_DATA,
  payload,
});
