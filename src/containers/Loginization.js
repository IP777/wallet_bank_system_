import { connect } from 'react-redux';
import { login } from '../redux/operations/app/params';
import { isLoggedInSelector } from '../redux/reducers/app/params';
import Loginization from '../components/Loginization/Loginization';

const mapStateToProps = (state) => ({
  authenticated: isLoggedInSelector(state),
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginization);
