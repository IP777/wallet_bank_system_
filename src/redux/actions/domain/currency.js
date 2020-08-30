import { SET_CURRENCY } from '../../constants/currency';

export const setCurrency = (payload) => ({
  type: SET_CURRENCY,
  payload,
});
