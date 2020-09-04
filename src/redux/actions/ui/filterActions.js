import { SET_YEAR, SET_MONTH } from '../../constants/params';

export const setYear = (year) => ({
  type: SET_YEAR,
  payload: { year },
});

export const setMonth = (month) => ({
  type: SET_MONTH,
  payload: { month },
});
