import ROUTE_NAMES from './routes';

const { POSTS, USERS, COMMENTS } = ROUTE_NAMES;
const baseUrl = 'https://jsonplaceholder.typicode.com';

const URLS = {
    getAllPosts: () => `${baseUrl}/${POSTS}`,
    getAllUsers: () => `${baseUrl}/${USERS}`,
    getCommentsByPost: (postId) => `${baseUrl}/${POSTS}/${postId}/${COMMENTS}`,
    getUserById: (userId) => `${baseUrl}/${USERS}/${userId}`,
};

export default URLS;