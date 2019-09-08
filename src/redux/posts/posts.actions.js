import PostsActionTypes from './posts.types';

const {
    FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
} = PostsActionTypes;

export const fetchPostsStart = () => ({
    type: FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsFailure = errorMessage => ({
    type: FETCH_POSTS_FAILURE,
    payload: errorMessage
});