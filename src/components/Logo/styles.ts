import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    h1 {
        font-size: 30px;
    }

    .first {
        color: ${props => props.theme.colors.text};
        font-weight: bold;
        margin-right: 7px;
    }

    .second {
        color: ${props => props.theme.colors.secondaryText};
        font-weight: normal;
    }
`;
