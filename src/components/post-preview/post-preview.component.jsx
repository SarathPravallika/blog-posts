import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardDataLink } from '../styled-components';
import ROUTE_NAMES from '../../config/routes';

const PostPreview = ({ 
    title, id, userId, name,
    history, match 
}) => {
    const navigateToPost = () => history.push(`${match.path}/${id}`, {title, name}); 
    const navigateToUser = (e) => {
        e.stopPropagation();
        history.push(`${ROUTE_NAMES.USERS}/${userId}`);
    };

    return (
        <Card onClick={navigateToPost}>
            <CardHeader>{title}</CardHeader>
            <CardDataLink onClick={navigateToUser} align="flex-end">{name}</CardDataLink>
        </Card>
    );
};

export default withRouter(PostPreview);