import { getCurrencyRequest } from '../../../services/domain-api';
import { setCurrency } from '../../actions/domain/currency';
import currencyFilter from '../../../services/currencyFilter';

export const getCurrency = () => async (dispatch) => {
  try {
    const response = await getCurrencyRequest();

    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }

    const filteredCurrency = currencyFilter(response);

    dispatch(setCurrency(filteredCurrency));
  } catch (error) {
    console.log(error);
  }
};
