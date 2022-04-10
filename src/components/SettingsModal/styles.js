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
        width: 400px;
        height: 380px;
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
    
    img:first-child {
        top: 20px;
        right: 20px;
    }

    img:not(:first-child) {
        top: 20px;
        left: 20px;
    }

    img:nth-last-child(2n) {
        left: 60px;
    }

    img:hover {
        transform: scale(1.15);
    }

    h1 {
        margin-top: 50px;
        font-size: 20pt;
        font-weight: 500;
    }
    
    input[type="text"]:first-of-type {
        margin-top: 10px;
    }    

    input[type="text"], input[type="password"] {
        border: 1px solid #6544DB;
        background-color: rgb(25, 25, 25);
        color: white;
        font-size: 11pt;
        width: 80%;
        text-align: left;
        border-radius: 2px;
        outline: none;
        margin-top: 10px;
        padding: 10px 8px;
        transition: all ease 0.2s; 
    }
    
    input[type="text"]:focus, input[type="password"]:focus {
        border: 2px solid #6544DB;
        transform: scale(1.05);
    }

    input[type="password"][disabled],
    input[type="text"][disabled],
    input[type="checkbox"][disabled] {
        opacity: 0.6;
    }
    
    label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11pt;
        color: white;
        cursor: pointer;
        margin: 0 8px;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        margin: 0;
        width: 16px;
        height: 16px;
        border: 2px solid #6544DB;
        border-radius: 3px;
        transform: translateY(3px);
        margin-top: 25px;
        transition: all ease 0.5s;
    }

    input[type="checkbox"]:not(:checked):hover {
        opacity: 0.6;
    }

    input[type="checkbox"]:checked {
        background: #6544DB;
        border: none;
        clip-path: polygon(21% 40%, 21% 40%, 8% 54%, 25% 68%, 36% 77%, 47% 65%, 48% 64%, 64% 47%, 75% 35%, 93% 13%, 81% 4%, 36% 54%);
        transform: translateY(4px);
    }
    
    input[type="button"] {
        padding: 10px 20px;
        border: none;
        margin: 0 10px;
        width: 90px;
        border-radius: 5px;
        color: white;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    input[type="button"]:not([disabled]):hover {
        transform: scale(1.1);
    }
    
    input[type="button"][disabled] {
        opacity: 0.5;
    }
`;
