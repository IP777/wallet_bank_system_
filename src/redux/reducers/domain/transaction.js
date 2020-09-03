import { SET_DATA } from '../../constants/transaction';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return payload;
    default:
      return state;
  }
};

export const transActionSelector = (state) => state.domain.transaction;
