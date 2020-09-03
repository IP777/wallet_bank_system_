import { connect } from 'react-redux';
import TableCurrency from '../components/TableCurrency/TableCurrency';
import { currencySelector } from '../redux/reducers/domain/currency';
import { getCurrency } from '../redux/operations/domain/currency';

const mapStateToProps = (state) => ({
  currency: currencySelector(state),
});

const mapDispatchToProps = {
  getCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableCurrency);
