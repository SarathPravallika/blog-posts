const errorMessageReducer = (state = '', { type = '', payload }) => {
    // Assumed convention: Fetch action types would be like 'FETCH_****_FAILURE'
    switch(true) {
        case type.includes('FETCH_') && type.includes('_FAILURE'):
            return payload;
        default:
            return state;
    }
};

export default errorMessageReducer;