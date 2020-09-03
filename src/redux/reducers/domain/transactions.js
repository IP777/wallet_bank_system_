import {
  SET_DATE,
  SET_TYPE,
  SET_CATEGORY,
  SET_AMOUNT,
  SET_BALANCE_AFTER,
  SET_COMMENTS,
  SET_TYPE_BALANCE_AFTER,
} from '../../constants/transactions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATE:
      return { ...state, data: payload };
    case SET_TYPE:
      return { ...state, type: payload };
    case SET_CATEGORY:
      return { ...state, category: payload };
    case SET_AMOUNT:
      return { ...state, amount: payload };
    case SET_BALANCE_AFTER:
      return { ...state, balanceAfter: payload };
    case SET_COMMENTS:
      return { ...state, comments: payload };
    case SET_TYPE_BALANCE_AFTER:
      return { ...state, typeBalanceAfter: payload };

    default:
      return state;
  }
};

export const transactionsSelector = (state) => state.domain.transactions;
