import { combineReducers } from 'redux';
import currency from './currency';
import transactions from './transactions';
import transaction from './transaction';

export default combineReducers({
  currency,
  transactions,
  transaction,
});
