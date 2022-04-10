import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');
   
    background-color: rgb(20, 20, 20);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    display: inline-flex;
    
`;

export const Options = styled.div`
    position: absolute;
    top: 15px;
    left: 10px;

    img {
        display: inline;
        cursor: pointer;
        transition: all ease 0.5s;
        padding: 0 8px;
    }
    
    img:hover {
        transform: scale(1.15);
    }
`;

export const Recent = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 350px;
    height: 350px;
    border-radius: 6px;
    background-color: rgb(35, 35, 35);
    margin-top: 24vh;
    
    h1 {
        color: white;
        font-size: 20pt;
        font-weight: 500;
    }

    table {
        text-align: center;
        width: 100%;
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
    }


    td {
        color: rgb(240, 240, 240);
        cursor: pointer;
        transition: all ease 0.5s;
    }

    td:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
`;

export const Create = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 18vh;
    background-color: rgb(35, 35, 35);
    width: 450px;
    height: 420px;
    border-radius: 6px;


    h1 {
        color: white;
        font-size: 20pt;
        font-weight: 500;
    }

    input[type="text"]:first-of-type {
        margin-top: 10px;
    }

    input[type="text"], input[type="password"], input[type="number"] {
        font-family: 'JetBrains Mono', monospace;
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

    input[type="text"]:focus, input[type="password"]:focus, input[type="number"]:focus {
        border: 2px solid #6544DB;
        transform: scale(1.05);
    }

    input[type="password"][disabled], input[type="number"][disabled] {
        opacity: 0.6;
    }

    input[type="number"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11pt;
        color: white;
        cursor: pointer;
        margin: 0 10px 0 8px;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        margin: 0;
        font: inherit;
        width: 16px;
        height: 16px;
        border: 2px solid #6544DB;
        border-radius: 3px;
        transform: translateY(3px);
        transition: all ease 0.5s;
        margin: 30px 0 0 10px;
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
        border: none;
        color: white;
        background-color: #6544DB;
        font-weight: 500;
        font-family: 'JetBrains Mono', monospace;
        border-radius: 4px;
        padding: 12px 20px;
        margin-top: 25px;
        transition: all ease 1s;
    }

    input[type="button"]:hover {
        transform: scale(1.1);
    }
`;

export const Owned = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 350px;
    height: 350px;
    border-radius: 6px;
    background-color: rgb(35, 35, 35);
    margin-top: 24vh;

    h1 {
        color: white;
        font-size: 20pt;
        font-weight: 500;
    }

    table {
        text-align: center;
        width: 100%;
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
        overflow: hidden;
        overflow-y: scroll;
        height: 250px;
        width: 95%;

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
    }

    td:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
`;
