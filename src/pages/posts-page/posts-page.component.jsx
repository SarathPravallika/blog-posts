import React, { lazy } from 'react';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import DataFetching from '../../render-props/data-fetching';
import URLS from '../../config/urls';
import WithSpinner from '../../hocs/with-spinner';
import WithError from '../../hocs/with-error';
import ROUTE_NAMES from '../../config/routes';

const PARAM_POST_ID = ROUTE_NAMES.PARAM_POST_ID;
const PostsListContainer = lazy(() => import('../../components/posts-list/posts-list.container'));
const PostDetail = lazy(() => import('../../components/post-detail/post-detail.component'));
const PostDetailWithData = compose(
    WithSpinner,
    WithError,
)(PostDetail);

const PostsPage = ({ match }) => {
    return (
        <React.Fragment>
            <Route exact path={`${match.path}`} component={PostsListContainer} />
            <Route 
                path={`${match.path}/:${PARAM_POST_ID}`} 
                render={(props) => (
                    <DataFetching url={URLS.getCommentsByPost(`:${PARAM_POST_ID}`)} {...props} >
                        {(props) => <PostDetailWithData {...props} />}
                    </DataFetching>
                )} 
            />
        </React.Fragment>
    );
};

export default PostsPage;