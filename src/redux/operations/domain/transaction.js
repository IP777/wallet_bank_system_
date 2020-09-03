import { transactionRequest } from '../../../services/session-api';
import { setTransactionData } from '../../actions/domain/transaction';
import { LOCAL_STORAGE_KEY } from '../../constants/params';

export const postTransactions = (param) => async (dispatch) => {
  try {
    const userToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).token;
    const response = await transactionRequest(param, userToken);

    const responseArray = response.finance.data;
    const lastChildOfArray = responseArray[responseArray.length - 1];

    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }

    dispatch(setTransactionData(lastChildOfArray));
  } catch (error) {
    console.log(error);
  }
};
