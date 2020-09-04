import { connect } from 'react-redux';
import { logout } from '../redux/operations/app/params';
import Header from '../components/Header/Header';
import { userNameSelector } from '../redux/reducers/app/params';

const mapStateToProps = (state) => ({
  userName: userNameSelector(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
