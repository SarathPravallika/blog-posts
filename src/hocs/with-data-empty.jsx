import React from 'react';

const WithDataEmpty = WrappedComponent => (props) => !props.data ? null : <WrappedComponent {...props} />;

export default WithDataEmpty;