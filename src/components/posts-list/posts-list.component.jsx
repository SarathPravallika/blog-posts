import React from 'react';
import PostPreview from '../post-preview/post-preview.component';
import { CardsContainer } from '../styled-components';

const PostsList = ({ data: allPosts }) => (
    <CardsContainer>
        {allPosts && allPosts.map(post => (
            <PostPreview key={post.id} {...post} />
        ))}
    </CardsContainer>
);

export default PostsList;