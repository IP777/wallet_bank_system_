import { connect } from 'react-redux';
import { postTransaction } from '../redux/operations/domain/transaction';

import CreateTransaction from '../components/CreateTransaction';

const mapDispatchToProps = {
  postTransaction,
};

export default connect(null, mapDispatchToProps)(CreateTransaction);
