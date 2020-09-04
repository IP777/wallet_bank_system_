import { createSelector } from 'reselect';
import { SET_TRANSACTIONS } from '../../constants/transactions';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TRANSACTIONS:
      return payload;
    default:
      return state;
  }
};

export const transactionsSelector = (state) => state.domain.transactions;

export const getTotalBalance = createSelector(
  transactionsSelector,
  (transaction) => {
    if (transaction.length) {
      const result = transaction.reduce(function (sum, current) {
        return sum + current.amount;
      }, 0);

      return result;
    }
    return transaction;
  }
);
