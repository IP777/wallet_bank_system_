import { connect } from 'react-redux';
import { registration } from '../redux/operations/app/params';

import Registration from '../components/Registration/Registration';

const mapDispatchToProps = {
  onRegistratio: registration,
};

export default connect(null, mapDispatchToProps)(Registration);
