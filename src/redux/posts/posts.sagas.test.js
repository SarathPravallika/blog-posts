import { takeLatest, put, call } from 'redux-saga/effects';
import PostsActionTypes from './posts.types';

const { FETCH_POSTS_START } = PostsActionTypes;
import { fetchPostsStart, fetchPostsAsync } from './posts.sagas';
import URLS from '../../config/urls';

describe('on validating posts sagas', () => {
    it('should trigger on FETCH_POSTS_START', () => {
      const generator = fetchPostsStart();
      expect(generator.next().value).toEqual(
        takeLatest(FETCH_POSTS_START, fetchPostsAsync)
      );
    });

    it('should trigger on FETCH_POSTS_ASYNC', () => {  
        const generator = fetchPostsAsync();
        expect(generator.next().value).toEqual(
            call(fetch, URLS.getAllPosts())
          );
    });
});
