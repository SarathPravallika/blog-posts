
import styled from 'styled-components';
export * from './card';

export const PageHeading = styled.h2`
    text-align: center;
`;

export const PageContainer = styled.div`
    width: 75vw;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 90vw;
    }
`;

export const NotificationMessage = styled.h4`
    text-align: center;
    color: ${props => props.color || "blue"};
`;
