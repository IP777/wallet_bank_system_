import { connect } from 'react-redux';
import { logout } from '../redux/operations/app/params';

import Header from '../components/Header/Header';

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(Header);
