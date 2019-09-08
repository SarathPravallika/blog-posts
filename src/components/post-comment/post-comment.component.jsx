import React from 'react';
import { Card, CardHeader, CardData } from '../styled-components';

const PostComment = ({ 
    comment: { name, body, email }
}) => (
    <Card>
        <CardHeader align="flex-start">{name}</CardHeader>
        <CardData>{body}</CardData>
        <CardData align="flex-end">{email}</CardData>
    </Card>
);

export default PostComment;