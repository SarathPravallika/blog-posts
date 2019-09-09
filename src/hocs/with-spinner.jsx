import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { getDisplayName } from '../shared/utils';

const WithSpinner = WrappedComponent => {
    const WithSpinner = ({ isLoading, ...otherProps }) => (
        <LoadingOverlay active={isLoading} spinner>
            <WrappedComponent {...otherProps} />    
        </LoadingOverlay>
    );
    WithSpinner.displayName = `WithSpinner(${getDisplayName(WrappedComponent)})`;
    return WithSpinner;
};

export default WithSpinner;