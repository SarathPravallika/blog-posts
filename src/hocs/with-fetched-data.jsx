import { compose } from 'redux';
import WithSpinner from './with-spinner';
import WithError from './with-error';
import WithDataEmpty from './with-data-empty';

const WithFetchedData = WrappedComponent => compose(
    WithSpinner,
    WithError,
    WithDataEmpty
)(WrappedComponent);

export default WithFetchedData;