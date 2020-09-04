import { connect } from 'react-redux';
import { Balance } from '../components/Balance/Balance';
import { getTotalBalance } from '../redux/reducers/domain/transactions';

const mapStateToProps = (state) => ({
  totalBalance: getTotalBalance(state),
});

export default connect(mapStateToProps)(Balance);
