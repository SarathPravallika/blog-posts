import React, { useState } from 'react';
import UserPreview from '../user-preview/user-preview.component';
import { UsersListSearch } from './users-list.styles';
import { PageContainer, PageHeading, CardsContainer, NotificationMessage } from '../styled-components';

import WithFetchedData from '../../hocs/with-fetched-data';
const UsersListWithData = WithFetchedData(CardsContainer);

const UsersList = ({ data: allUsers }) => {
    const [userQuery, setUserQuery] = useState('');

    const filteredUsers = allUsers.filter(({ name }) => name.toLowerCase().includes(userQuery.toLowerCase()));
    return (
        <PageContainer>
            <PageHeading>All Users</PageHeading>
            <UsersListSearch
                type="text" 
                defaultValue=""
                placeholder="Search for user here"
                onChange={(event) => setUserQuery(event.target.value)}
            />            
            <UsersListWithData>
                {filteredUsers.length ?
                    filteredUsers.map(({id, name, email}) => (
                        <UserPreview key={id} name={name} email={email} id={id} />
                    )) 
                    : (userQuery ? <NotificationMessage>No users matching search criteria</NotificationMessage> : null)
                }
            </UsersListWithData>
        </PageContainer>
    );
};

export default UsersList;