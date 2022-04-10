import styled from 'styled-components';

export const Container = styled.div`
    section {
        position: fixed;
        top: 0;
        right: -1.5vw;
        z-index: 1;
        background-color: blue;
        height: 0;
        width: 0;
        margin: 0 auto;
        transition: all ease 0.5s;
    }

    section:hover {
        right: 12vw;
    }

    section ul {
        display: inline-flex;
        list-style: none;
        justify-content: center;
        padding: none;
        width: 100%;
    }

    section ul li:first-child {
        padding: 6px 20px 1px 10px
    }

    section ul li {
        padding: 6px 10px 1px 10px;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    section ul li:not(:first-child):hover {
        transform: scale(1.35);
    }
`;
