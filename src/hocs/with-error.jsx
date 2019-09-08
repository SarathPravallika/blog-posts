import React from 'react';
import { NotificationMessage } from '../components/styled-components';

const WithError = WrappedComponent => ({ errorMessage, ...otherProps }) => {
    return errorMessage ? <NotificationMessage color="red">Something wrong happened!</NotificationMessage> : <WrappedComponent {...otherProps} />
};

export default WithError;