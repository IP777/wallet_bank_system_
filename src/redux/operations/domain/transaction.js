import { transactionRequest } from '../../../services/session-api';
import { LOCAL_STORAGE_KEY } from '../../constants/params';

export const postTransaction = (param) => async () => {
  try {
    const userToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).token;
    const response = await transactionRequest(param, userToken);

    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }
  } catch (error) {
    console.log(error);
  }
};
