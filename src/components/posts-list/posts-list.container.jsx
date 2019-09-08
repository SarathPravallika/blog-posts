import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPostsStart } from '../../redux/posts/posts.actions';
import { fetchUsersStart } from '../../redux/users/users.actions';
import { selectIsLoading } from '../../redux/is-loading/is-loading.selectors';
import { selectErrorMessage } from '../../redux/error-message/error-message.selectors';
import { selectPostsForView } from '../../redux/posts/posts.selectors';
import PostsList from './posts-list.component';
import { PageContainer, PageHeading } from '../styled-components';
import WithFetchedData from '../../hocs/with-fetched-data';

const PostsListWithData = WithFetchedData(PostsList);

const PostsListContainer = ({ 
    posts, fetchPostsStart, fetchUsersStart, isLoading, errorMessage
}) => {
    useEffect(() => {
        // Users are also fetched because the user name is not present in the GET response
        fetchPostsStart();
        fetchUsersStart();
    }, [fetchPostsStart, fetchUsersStart]);

    return (
        <PageContainer>
            <PageHeading>Blog Posts - List</PageHeading>
            <PostsListWithData isLoading={isLoading} errorMessage={errorMessage} data={posts} />
        </PageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    errorMessage: selectErrorMessage,
    posts: selectPostsForView,
});

const mapDispatchToProps = dispatch => ({
    fetchPostsStart: () => dispatch(fetchPostsStart()),
    fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
