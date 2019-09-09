import React from 'react';
import { getDisplayName } from '../shared/utils';

const WithDataEmpty = WrappedComponent => {
    const WithDataEmpty = (props) => !props.data ? null : <WrappedComponent {...props} />;
    WithDataEmpty.displayName = `WithDataEmpty(${getDisplayName(WrappedComponent)})`;
    return WithDataEmpty;
};

export default WithDataEmpty;