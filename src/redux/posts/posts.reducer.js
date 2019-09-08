import PostsActionTypes from './posts.types';
import { buildPosts } from './posts.utils';

const INITIAL_STATE = {
    byId: {},
    allIds: []
};

const { FETCH_POSTS_SUCCESS } = PostsActionTypes;

const PostsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case FETCH_POSTS_SUCCESS:
            return Object.assign(
                {},
                state,
                buildPosts(state, payload)
            );
        default:
            return state;
    }
};

export default PostsReducer;