import { connect } from 'react-redux';
import { setFilter } from '../redux/operations/ui/filterOperation';
import { getYear, getMonth } from '../redux/reducers/ui/filter';
import TransactionsFilter from '../components/TransactionsFilter/TransactionsFilter';

const mapStateToProps = (state) => ({
  year: getYear(state),
  month: getMonth(state),
});

const mapDispatchToProps = {
  filter: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsFilter);
