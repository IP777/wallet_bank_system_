import {
  SET_DATE,
  SET_TYPE,
  SET_CATEGORY,
  SET_AMOUNT,
  SET_BALANCE_AFTER,
  SET_COMMENTS,
  SET_TYPE_BALANCE_AFTER,
} from '../../constants/transactions';

export const setTransactionDate = (payload) => ({
  type: SET_DATE,
  payload,
});
export const setTransactionType = (payload) => ({
  type: SET_TYPE,
  payload,
});
export const setTransactionCategory = (payload) => ({
  type: SET_CATEGORY,
  payload,
});
export const setTransactionAmount = (payload) => ({
  type: SET_AMOUNT,
  payload,
});
export const setTransactionBalanceAfter = (payload) => ({
  type: SET_BALANCE_AFTER,
  payload,
});
export const setTransactionComments = (payload) => ({
  type: SET_COMMENTS,
  payload,
});
export const setTransactionTypeBalanceAfter = (payload) => ({
  type: SET_TYPE_BALANCE_AFTER,
  payload,
});
