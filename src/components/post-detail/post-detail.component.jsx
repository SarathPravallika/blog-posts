import React from 'react';
import PostComment from '../post-comment/post-comment.component';
import { PageContainer, Card, CardHeader, CardData, CardsContainer, CardSubHeading } from '../styled-components';

const PostDetail = ({ title, name, data: comments }) => (
    <PageContainer>
        <Card>
            <CardHeader>Post Details</CardHeader>
            <CardData>Post Title: {title}</CardData>
            <CardData>Post by: {name}</CardData>
            <CardSubHeading>Comments</CardSubHeading>
            <CardsContainer>            
                {comments && comments.map(comment => (
                    <PostComment key={comment.id} comment={comment} />
                ))}
            </CardsContainer>
        </Card>
    </PageContainer>
);

export default PostDetail;