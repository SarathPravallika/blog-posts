import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchUsersStart } from '../../redux/users/users.actions';
import { selectIsLoading } from '../../redux/is-loading/is-loading.selectors';
import { selectUserDetailsForView } from '../../redux/users/users.selectors';
import WithFetchedData from '../../hocs/with-fetched-data';
import UsersList from './users-list.component';

// const UsersListWithData = WithFetchedData(UsersList);

const UsersListContainer = ({ users, fetchUsersStart, isLoading }) => {
    useEffect(() => {
        fetchUsersStart();
    }, [fetchUsersStart]);

    return <UsersList isLoading={isLoading} data={users} />
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    users: selectUserDetailsForView
});

const mapDispatchToProps = dispatch => ({
    fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
