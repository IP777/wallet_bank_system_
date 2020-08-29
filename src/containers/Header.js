import { connect } from 'react-redux';
import * as sessionAction from '../redux/actions/app/sessionAction';
import Header from '../components/Header/Header';

const mapDispatchToProps = {
  logout: sessionAction.logOut,
};

export default connect(null, mapDispatchToProps)(Header);
