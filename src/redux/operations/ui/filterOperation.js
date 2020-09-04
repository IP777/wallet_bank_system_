import { setYear, setMonth } from '../../actions/ui/filterActions';

export const setFilter = () => async (dispatch) => {
  try {
    const year = await localStorage.getItem('year');
    const month = await localStorage.getItem('month');

    dispatch(setYear(year));
    dispatch(setMonth(month));
  } catch (error) {
    throw new Error(error);
  }
};
