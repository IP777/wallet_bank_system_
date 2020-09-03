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
