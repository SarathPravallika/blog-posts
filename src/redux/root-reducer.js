import { combineReducers } from 'redux';

import isLoadingReducer from './is-loading/is-loading.reducer';
import errorMessageReducer from './error-message/error-message.reducer';
import postsReducer from './posts/posts.reducer';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    errorMessage: errorMessageReducer,
    posts: postsReducer,
    users: usersReducer,
});

export default rootReducer;