import { transactionRequest } from '../../../services/session-api';
import {
  setTransactionDate,
  setTransactionType,
  setTransactionCategory,
  setTransactionAmount,
  setTransactionBalanceAfter,
  setTransactionComments,
  setTransactionTypeBalanceAfter,
} from '../../actions/domain/transactions';
import { LOCAL_STORAGE_KEY } from '../../constants/params';

export const getTransactions = (param) => async (dispatch) => {
  try {
    const userToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).token;
    const userID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).user.id;
    const response = await transactionRequest(param, userToken, userID);
    //console.log(response);

    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }
    dispatch(setTransactionDate(response.date));
    dispatch(setTransactionType(response.type));
    dispatch(setTransactionCategory(response.category));
    dispatch(setTransactionAmount(response.amount));
    dispatch(setTransactionBalanceAfter(response.balanceAfter));
    dispatch(setTransactionComments(response.comments));
    dispatch(setTransactionTypeBalanceAfter(response.typeBalanceAfter));
  } catch (error) {
    console.log(error);
  }
};
