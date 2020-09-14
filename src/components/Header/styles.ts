import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
`;

export const Nav = styled.nav`
    flex: 3;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-evenly;
    }

    li {
        color: #fff;
        list-style: none;
        display: flex;
        flex: 1;
        justify-content: center;
        cursor: pointer;
        font-size: 23px;
        /* font-size: 30px; */
    }

    svg {
        display: none;
    }

    .activeHome,
    .activeProject,
    .activeContacts {
        color: #62dafc;
        font-weight: bold;

        align-items: center;

        svg {
            display: flex;
            margin: 0 5px;
        }

        /* :before {
            content: '<';
            font-weight: bold;
            padding-right: 4px;
        }

        :after {
            content: '❯';
            font-weight: bold;
            padding-left: 4px;
        } */
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex: 1;

    a {
        display: flex;
        border: 0;
        flex: 1;
        background: transparent;
        color: #fff;
        justify-content: center;
        align-items: center;
    }
`;
