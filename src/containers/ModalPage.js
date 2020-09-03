import { connect } from 'react-redux';
import { getTransactions } from '../redux/operations/domain/transactions';
import { transactionsSelector } from '../redux/reducers/domain/transactions';

import ModalPage from '../pages/ModalPage/ModalPage';

const mapStateToProps = (state) => ({
  transactions: transactionsSelector(state),
});

const mapDispatchToProps = {
  getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
