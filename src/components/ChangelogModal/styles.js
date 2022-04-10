import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(10, 10, 10, 0.7);
    z-index: 1;

    section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35vw;
        height: 70vh;
        background-color: rgb(30, 30, 30);
        text-align: center;
        padding-top: 1px;
        border-radius: 5px;
        color: white;
    }
    
    img {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        border-radius: 50%;
        transition: all ease 0.5s;
        padding: 3px;
    }
    
    img:hover {
        transform: scale(1.15);
    }

    h1 {
        font-family: inherit;
        margin-top: 50px;
        font-weight: 500;
        font-size: 20pt;
    }

    td {
        display: flex;
        flex-direction: row;
        font-weight: 400;
        font-size: 11pt;
        margin: 10px 0 0 20px;
        text-align: left;
    }

    td:first-child {
        margin-top: 0;
    }

    td::before {
        content: '-';
        margin-right: 5px;
    }
`;
