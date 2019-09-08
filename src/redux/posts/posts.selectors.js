import { createSelector } from 'reselect';
import { selectUsers } from '../users/users.selectors';
import { buildPostsDetails } from './posts.utils';

export const selectPosts = state => state.posts;

export const selectPostsForView = createSelector(
    [selectPosts, selectUsers],
    (posts, users) => buildPostsDetails(posts, users)
);