import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardData } from '../styled-components';

const UserPreview = ({ 
    name,
    email,
    id,
    history,
    match 
}) => (
    <Card onClick={() => history.push(`${match.path}/${id}`)}>
        <CardHeader>{name}</CardHeader>
        <CardData align="flex-end">{email}</CardData>
    </Card>
);

export default withRouter(React.memo(UserPreview));