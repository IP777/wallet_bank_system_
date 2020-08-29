import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/selectors/app/sessionSelectors';
import App from '../App';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(App);
