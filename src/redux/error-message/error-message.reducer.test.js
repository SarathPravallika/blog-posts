import PostsActionTypes from '../posts/posts.types';
import errorMessageReducer from './error-message.reducer';

const { FETCH_POSTS_FAILURE } = PostsActionTypes;
const initialState = '';

describe('errorMessageReducer', () => {
  it('should return initial state', () => {
    expect(errorMessageReducer(undefined, {})).toEqual(initialState);
  });

  it('should set error message when any fetch ends with failure', () => {
    const NETWORK_ERROR = 'Network error occured!';
    expect(errorMessageReducer(
        initialState, {type: FETCH_POSTS_FAILURE, payload: NETWORK_ERROR}
    )).toEqual(NETWORK_ERROR);
  });
});
