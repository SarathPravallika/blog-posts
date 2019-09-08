import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchUsersStart } from '../../redux/users/users.actions';
import { selectIsLoading } from '../../redux/is-loading/is-loading.selectors';
import { selectErrorMessage } from '../../redux/error-message/error-message.selectors';
import { selectUserDetailsForView } from '../../redux/users/users.selectors';
import WithFetchedData from '../../hocs/with-fetched-data';
import UsersList from './users-list.component';
import { PageContainer, PageHeading } from '../styled-components';

const UsersListWithData = WithFetchedData(UsersList);

const UsersListContainer = ({ users, fetchUsersStart, isLoading, errorMessage }) => {
    useEffect(() => {
        fetchUsersStart();
    }, [fetchUsersStart]);

    return (
        <PageContainer>
            <PageHeading>All Users</PageHeading>
            <UsersListWithData isLoading={isLoading} errorMessage={errorMessage} data={users} />
        </PageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    errorMessage: selectErrorMessage,
    users: selectUserDetailsForView
});

const mapDispatchToProps = dispatch => ({
    fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
