import styled from 'styled-components';
import STYLES from '../../config/styles';

const { PADDING_SMALL, MARGIN_SMALL, MARGIN_MEDIUM, BORDER_COLOR, BORDER_RADIUS_SMALL, BORDER_SMALL } = STYLES;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,0,0,0.05), 0 0px 20px rgba(0,0,0,0.08);
    border: ${BORDER_SMALL} solid ${BORDER_COLOR};
    border-radius: ${BORDER_RADIUS_SMALL};
    margin-bottom: ${MARGIN_MEDIUM};
    padding: ${PADDING_SMALL}
    cursor: ${props => props.onClick ? "pointer" : "default"};
`;

export const CardHeader = styled.h3`
    display: flex;
    justify-content: ${props => props.align || "center"};
    margin-top: 0;
    margin-bottom: ${MARGIN_SMALL};
`;

export const CardData = styled.div`
    display: flex;
    justify-content: ${props => props.align || "flex-start"};
`;

export const CardDataLink = styled.div`
    display: flex;
    text-decoration: underline;
    cursor: pointer;
    justify-content: ${props => props.align || "flex-start"};
`;

export const CardSubHeading = styled.h5`
    text-decoration: underline;
    margin-bottom: ${MARGIN_SMALL};
    margin-top: ${MARGIN_SMALL};
`;