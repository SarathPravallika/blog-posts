import React from 'react';
import useFetch from '../hooks/useFetch';

const DataFetching = ({ 
    url, children, 
    match: { params } = {}, 
    location: { state } = {} 
}) => {
    // In the given URL, replace the dynamically received parameters
    let updatedUrl = url;
    Object.entries(params).forEach(([key, value]) => {
        updatedUrl = updatedUrl.replace(new RegExp(`:${key}`, 'g'), value);
    });

    const [fetchingProps] = useFetch(updatedUrl);
    const passedProps = Object.assign({}, fetchingProps, state);
    
    return <React.Fragment>{children(passedProps)}</React.Fragment>;
};

export default DataFetching;