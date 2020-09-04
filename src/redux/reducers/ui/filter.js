import { SET_YEAR, SET_MONTH } from '../../constants/params';

const initialState = {
  month: '',
  year: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_YEAR:
      return { ...state, year: payload };
    case SET_MONTH:
      return { ...state, month: payload };
    default:
      return state;
  }
};

export const getYear = (state) => state.ui.filter.year;
export const getMonth = (state) => state.ui.filter.month;
