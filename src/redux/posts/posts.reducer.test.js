import PostsActionTypes from '../posts/posts.types';
import postsReducer from './posts.reducer';

const { FETCH_POSTS_SUCCESS } = PostsActionTypes;
const initialState = {
    byId: {},
    allIds: []
};

describe('postsReducer', () => {
  it('should return initial state', () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set posts with byIds and allIds after success call', () => {
    const expectedOutput = {
        byId: { 1: {id: 1, title: 'Post-1'}, 2: {id: 2, title: 'Post-2'}},
        allIds: [1, 2]
    };
    expect(postsReducer(
        initialState, {type: FETCH_POSTS_SUCCESS, payload: [{id: 1, title: 'Post-1'}, {id: 2, title: 'Post-2'}]}
    )).toEqual(expectedOutput);
  });

  it('should set posts with initial value if no data', () => {
    expect(postsReducer(
        initialState, {type: FETCH_POSTS_SUCCESS, payload: undefined}
    )).toEqual(initialState);
  });
});
