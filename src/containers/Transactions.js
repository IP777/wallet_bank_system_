import { connect } from 'react-redux';
import TableTransactions from '../components/TableTransactions/TableTransactions';
import { getTransactions } from '../redux/operations/domain/transactions';
import { transactionsSelector } from '../redux/reducers/domain/transactions';
import { userTokenSelector } from '../redux/reducers/app/params';

const mapStateToProps = (state) => ({
  transactions: transactionsSelector(state),
  token: userTokenSelector(state),
});

const mapDispatchToProps = {
  getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableTransactions);
