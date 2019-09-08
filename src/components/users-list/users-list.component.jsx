import React, { useState } from 'react';
import UserPreview from '../user-preview/user-preview.component';
import { UsersListSearch } from './users-list.styles';
import { CardsContainer, NotificationMessage } from '../styled-components';

const UsersList = ({ data: allUsers }) => {
    const [userQuery, setUserQuery] = useState('');

    const filteredUsers = allUsers.filter(({ name }) => name.toLowerCase().includes(userQuery.toLowerCase()));
    return (
        <React.Fragment>
            <UsersListSearch
                type="text" 
                defaultValue=""
                placeholder="Search for user here"
                onChange={(event) => setUserQuery(event.target.value)}
            />            
            <CardsContainer>
                {filteredUsers.length ?
                    filteredUsers.map(({id, name, email}) => (
                        <UserPreview key={id} name={name} email={email} id={id} />
                    )) 
                    : (userQuery ? <NotificationMessage>No users matching search criteria</NotificationMessage> : null)
                }
            </CardsContainer>
        </React.Fragment>
    );
};

export default UsersList;