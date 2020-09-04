import { connect } from 'react-redux';
import { postTransaction } from '../redux/operations/domain/transaction';
import { getTotalBalance } from '../redux/reducers/domain/transactions';

import ModalPage from '../pages/ModalPage/ModalPage';

const mapStateToProps = (state) => ({
  totalBalance: getTotalBalance(state),
});

const mapDispatchToProps = {
  postTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
