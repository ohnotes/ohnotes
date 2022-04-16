import styled from 'styled-components';
import Scene from '../../assets/scene.svg';
import SceneMobile from '../../assets/scene_mobile.svg';

export const Container = styled.div`
    background: url(${ Scene });
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(16, 16, 16);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    text-align: center;
    display: inline-flex;

    @media (max-width: 800px) {
        background: url(${ SceneMobile });
        background-size: cover;
    }
`;


export const Create = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(24, 24, 24);
    width: 450px;
    height: 450px;
    border-radius: 6px;

    h1 {
        color: white;
        font-size: 22pt;
        font-weight: 500;
    }

    input[type="text"]:first-of-type {
        margin-top: 10px;
    }

    input[type="text"], input[type="password"], input[type="number"] {
        border: 1px solid #6544DB;
        background-color: rgb(25, 25, 25, 0.9);
        color: white;
        font-size: 12pt;
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
        font-size: 12pt;
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
        cursor: pointer;
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
        border-radius: 4px;
        padding: 12px 20px;
        margin-top: 25px;
        transition: all ease 1s;
        font-size: 12pt;
        cursor: pointer;
    }

    input[type="button"]:hover {
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        background-color: transparent;
        width: 90vw;
        height: 50vh;
        top: 45%;

        h1 {
            font-size: 24pt;
        }

        input[type="text"], input[type="password"], input[type="number"] {
            font-size: 12.5pt;
        }

        label {
            font-size: 14pt;
        }

        input[type="checkbox"] {
            transform: translateY(1.5px);
        }

        input[type="button"] {
            font-size: 13pt;
            padding: 15px 25px;
            margin-top: 30px;
        }
    }
`;
