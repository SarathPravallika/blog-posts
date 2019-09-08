import { shallowCompare } from '../../shared/utils';

export const buildPostsDetails = ({byId, allIds}, users) => {
    return allIds && users && allIds.map(postId => {
        const { title, id, userId } = byId[postId];
        return {
            title,
            id,
            userId,
            name: users.byId && users.byId[userId] ? users.byId[userId].name : `User ID: ${userId}`
        }
    });
};

export const buildPosts = ({byId}, posts) => {
    const newById = {};
    const newAllIds = [];

    // Updating with the new posts
    posts && posts.forEach(post => {
        const oldPost = byId[post.id];
        // In our simplistic case shallow compare will work, but in live scenarios deep compare is needed
        if (oldPost && shallowCompare(oldPost, post)) {
            newById[post.id] = oldPost;
        } else {
            newById[post.id] = post;
        }
        newAllIds.push(post.id);
    });

    return {
        byId: newById,
        allIds: newAllIds
    };
}
