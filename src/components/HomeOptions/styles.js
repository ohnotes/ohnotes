import styled from 'styled-components';

export const Standard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: rgb(16, 16, 16, 0.4);

    nav {
        padding: 0 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    nav h1 {
        font-family: 'Lato', sans-serif !important;
        font-size: 18pt;
        font-weight: 900;
        color: white;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    nav ul li {
        font-size: 15pt;
        margin: 0 15px;
        color: white;
        cursor: pointer;
        transition: all ease 0.5s;
    }

    nav ul li:hover {
        color: rgb(255, 255, 255, 0.7)
    }

    nav ul li:after {
        content: "";
        display: block;
        transform: scaleX(0);
        transition: transform ease 0.5s, padding ease-in-out 0.25s;
    }

    nav ul li:hover:after {
        border-bottom: 2px solid #6544DB;
        padding: 2px 0;
        transform: scaleX(1);
    }

    nav ul li:last-child {
        margin-right: 0;
    }
`;

export const Hamburguer = styled.div`
    position: fixed;
    top: 15px;
    left: 10px;
`;

export const Menu = styled.div` 
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    section {
        position: fixed;
        animation: 0.75s forwards slide;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(16, 16, 16);
    }

    img {
        position: absolute;
        top: 10px;
        left: 85%;
    }

    nav ul {
        list-style: none;
        padding: 0;
        text-align: left;
    }

    nav ul li:first-of-type {
        margin-top: 100px;
    }

    nav ul li {
        color: white;
        font-size: 20pt;
        margin-left: 20px;
        margin-top: 35px;
        width: 70%;
    }

    nav ul li:after {
        content: '';
        display: block;
        transform: scaleX(0);
        border-bottom: 3px solid #6544DB;
        animation: slideLi forwards 1s;
        padding: 5px 0;
    }

    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes slideLi {
        to {
            transform: scaleX(1);
        }
    }
`;
