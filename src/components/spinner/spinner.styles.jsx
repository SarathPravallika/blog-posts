import styled from 'styled-components';
import STYLES from '../../config/styles';

const { BORDER_COLOR_OPACITY, BORDER_MEDIUM } = STYLES;

export const SpinnerOverlay = styled.div`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    width: 30px;
    height: 30px;
    border: ${BORDER_MEDIUM} solid ${BORDER_COLOR_OPACITY};
    border-top-color: #676767;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;

    @keyframes spin {
       0% { transform: rotate(0deg); }
       100% { transform: rotate(360deg); }
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
`;