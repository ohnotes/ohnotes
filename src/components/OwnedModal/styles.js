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
        width: 30vw;
        height: 70vh;
        text-align: center;
        background-color: rgb(30, 30, 30);
        border-radius: 5px;
        color: white;
        animation: 0.5s ease-out slideModal;
    }
    
    @keyframes slideModal {
        from {
            transform: translate(-50%, -100%)
        }
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
        color: white;
        font-size: 20pt;
        margin-top: 50px;
        font-weight: 500;
    }
    
    h2 {
        color: white;
        font-size: 13pt;
        font-weight: 300;
        margin-top: -15px;
    }

    table {
        text-align: center;
        width: 95%;
        height: 65%;
    }

    a:not(:first-child) {
        margin-top: 15px;
    }
    
    a {
        text-decoration: none;
    }

    a:not(:first-child) {
        margin-top: 15px;
    }
    
    a {
        text-decoration: none;
    }

    th {
        font-weight: 400;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: scroll;
        width: 100%;
        height: 100%;

        &::-webkit-scrollbar {
            background-color: rgb(25, 25, 25);
            border-radius: 5px;
            width: 7px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: rgb(40, 40, 40);
            border-radius: 10px;
        }
    }

    td {
        color: rgb(240, 240, 240);
        cursor: pointer;
        transition: all ease 0.5s;
        font-size: 11pt;
    }

    td:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
    
    @media (max-width: 800px) {
        section:first-child {
            width: 100%;
            height: 100%;
        }

        img {
            width: 36px;
        }

        h1 {
            font-size: 22pt;
        }

        h2 {
            font-size: 16pt;
        }

        th {
            width: 100%;
            height: 100%;
        }
    }
`;
