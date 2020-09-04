import { combineReducers } from 'redux';
import currency from './currency';
import transactions from './transactions';

export default combineReducers({
  transactions,
  currency,
});
