import React from 'react';
import { getDisplayName } from '../shared/utils';
import { NotificationMessage } from '../components/styled-components';

const WithError = WrappedComponent => {
    const WithError = ({ errorMessage, ...otherProps }) => {
        return errorMessage ? <NotificationMessage color="red">Something wrong happened!</NotificationMessage> : <WrappedComponent {...otherProps} />
    };
    WithError.displayName = `WithError(${getDisplayName(WrappedComponent)})`;
    return WithError;
};

export default WithError;