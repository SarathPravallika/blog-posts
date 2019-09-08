import PostsActionTypes from '../posts/posts.types';
import isLoadingReducer from './is-loading.reducer';

const { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } = PostsActionTypes;
const initialState = false;

describe('isLoadingReducer', () => {
  it('should return initial state', () => {
    expect(isLoadingReducer(undefined, {})).toEqual(initialState);
  });

  it('should set loading indicator to true when any fetch starts', () => {
    expect(isLoadingReducer(initialState, {type: FETCH_POSTS_START})).toEqual(true);
  });

  it('should set loading indicator to false when any fetch ends with success and failure', () => {
    expect(isLoadingReducer(initialState, {type: FETCH_POSTS_SUCCESS})).toEqual(false);
    expect(isLoadingReducer(initialState, {type: FETCH_POSTS_FAILURE})).toEqual(false);
  });
});
