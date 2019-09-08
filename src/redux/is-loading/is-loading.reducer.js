const isLoadingReducer = (state = false, { type = '' }) => {
    // Assumed convention: Fetch action types would be like 'FETCH_****_START / _SUCCESS / _FAILURE'
    switch(true) {
        case type.includes('FETCH_') && type.includes('_START'):
            return true;
        case type.includes('FETCH_') && (type.includes('_SUCCESS') || type.includes('_FAILURE')):
            return false;
        default:
            return state;
    }
};

export default isLoadingReducer;