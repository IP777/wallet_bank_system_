import { connect } from 'react-redux';
import { postTransactions } from '../redux/operations/domain/transaction';
//import { transactionsSelector } from '../redux/reducers/domain/transactions';

import ModalPage from '../pages/ModalPage/ModalPage';

// const mapStateToProps = (state) => ({
//   transactions: transactionsSelector(state),
// });

const mapDispatchToProps = {
  postTransactions,
};

export default connect(null, mapDispatchToProps)(ModalPage);
