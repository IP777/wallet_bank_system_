import { connect } from 'react-redux';
import { postTransaction } from '../redux/operations/domain/transaction';

import ModalPage from '../pages/ModalPage/ModalPage';

const mapDispatchToProps = {
  postTransaction,
};

export default connect(null, mapDispatchToProps)(ModalPage);
