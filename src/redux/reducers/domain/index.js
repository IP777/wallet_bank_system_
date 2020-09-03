import { combineReducers } from 'redux';
import currency from './currency';
import transactions from './transactions';
import transaction from './transaction';


export default combineReducers({
  transactions,
  currency,
  transactions,
  transaction,
});
