import styled from 'styled-components';

export const ErrorBoundaryOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ErrorBoundaryImage = styled.div`
    height: 60vh;
    width: 60vh;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
`;