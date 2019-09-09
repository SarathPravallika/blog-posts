import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
    <LoadingOverlay active={isLoading} spinner>
        <WrappedComponent {...otherProps} />    
    </LoadingOverlay>
);

export default WithSpinner;