import styled from 'styled-components';
import STYLES from '../../config/styles';
import { Link } from 'react-router-dom';

const { PADDING_SMALL, MARGIN_MEDIUM, BORDER_COLOR, BORDER_MEDIUM } = STYLES;

export const HeaderContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${MARGIN_MEDIUM};
    border-bottom: ${BORDER_MEDIUM} solid ${BORDER_COLOR};
`;

export const NavOptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    padding: ${PADDING_SMALL}
`;