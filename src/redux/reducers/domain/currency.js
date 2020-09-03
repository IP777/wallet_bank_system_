import { SET_CURRENCY } from '../../constants/currency';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENCY:
      return payload;

    default:
      return state;
  }
};

export const currencySelector = (state) => state.domain.currency;
