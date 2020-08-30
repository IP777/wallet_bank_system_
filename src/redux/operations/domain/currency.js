import { getCurrencyRequest } from '../../../services/session-api';
import { setCurrency } from '../../actions/domain/currency';

export const getCurrency = () => async (dispatch) => {
  try {
    const response = await getCurrencyRequest();

    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }

    const filteredCurrency = response.filter(
      ({ currencyCodeA, currencyCodeB }) => {
        return (
          (currencyCodeA === 840 && currencyCodeB === 980) ||
          (currencyCodeA === 978 && currencyCodeB === 980) ||
          (currencyCodeA === 643 && currencyCodeB === 980)
        );
      }
    );
    dispatch(setCurrency(filteredCurrency));
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
