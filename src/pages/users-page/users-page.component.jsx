import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import DataFetching from '../../render-props/data-fetching';
import URLS from '../../config/urls';
import ROUTE_NAMES from '../../config/routes';
import WithFetchedData from '../../hocs/with-fetched-data';

const PARAM_USER_ID = ROUTE_NAMES.PARAM_USER_ID;
const UsersListContainer = lazy(() => import('../../components/users-list/users-list.container'));
const UserDetail = lazy(() => import('../../components/user-detail/user-detail.component'));
const UserDetailWithData = WithFetchedData(UserDetail);

const UsersPage = ({ match }) => {
    return (
        <React.Fragment>
            <Route exact path={`${match.path}`} component={UsersListContainer} />
            <Route 
                path={`${match.path}/:${PARAM_USER_ID}`} 
                render={(props) => (
                    <DataFetching url={URLS.getUserById(`:${PARAM_USER_ID}`)} {...props} >
                        {(props) => <UserDetailWithData {...props} />}
                    </DataFetching>
                )} 
            />
        </React.Fragment>
    );
};

export default UsersPage;
