import { connect } from 'react-redux';
import { postTransactions } from '../redux/operations/domain/transaction';

import ModalPage from '../pages/ModalPage/ModalPage';

const mapDispatchToProps = {
  postTransactions,
};

export default connect(null, mapDispatchToProps)(ModalPage);
