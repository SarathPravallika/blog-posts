import { takeLatest, call, put, all } from 'redux-saga/effects';
import URLS from '../../config/urls';
import PostsActionTypes from './posts.types';
import { fetchPostsSuccess, fetchPostsFailure } from './posts.actions';

const { FETCH_POSTS_START } = PostsActionTypes;

export function* fetchPostsAsync() {
    try {
        const response = yield call(fetch, URLS.getAllPosts());
        const posts = yield response.json();
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export function* fetchPostsStart() {
    yield takeLatest(FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSagas() {
    yield all([call(fetchPostsStart)])
}